import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import {
  People,
  School,
  Payment,
  CheckCircle,
  Cancel,
  Add,
  Edit,
  Delete,
  Person,
  Group,
  AttachMoney,
  Schedule,
  MusicNote,
  ExpandMore,
} from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";
import { usuarios } from "../mockData/usuarios";
import { clases } from "../mockData/clases";

const AdminDashboard = () => {
  const { currentUser } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeTab, setActiveTab] = useState(0);
  const [selectedClase, setSelectedClase] = useState(null);
  const [attendanceDialog, setAttendanceDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  if (!currentUser || currentUser.tipo !== "admin") {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" align="center">
          Acceso denegado
        </Typography>
      </Container>
    );
  }

  const getClaseInfo = (claseId) => {
    return clases.find((c) => c.id === claseId);
  };

  const getTotalStudents = () => {
    return usuarios.filter((u) => u.tipo === "estudiante").length;
  };

  const getTotalClasses = () => {
    return clases.length;
  };

  const getTotalRevenue = () => {
    return usuarios.reduce((total, user) => {
      return (
        total +
        user.historialPagos.reduce(
          (userTotal, pago) => userTotal + pago.monto,
          0
        )
      );
    }, 0);
  };

  const getActiveStudents = () => {
    return usuarios.filter(
      (u) => u.tipo === "estudiante" && u.estado === "activo"
    ).length;
  };

  const getNivelColor = (nivel) => {
    switch (nivel) {
      case "basico":
        return "default";
      case "intermedio":
        return "primary";
      case "avanzado":
        return "success";
      default:
        return "default";
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleAttendanceClick = (clase) => {
    setSelectedClase(clase);
    setAttendanceDialog(true);
  };

  const handleAttendanceSubmit = () => {
    // Aquí se procesaría la asistencia
    setAttendanceDialog(false);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, md: 3 } }}
    >
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontWeight: 700,
          }}
        >
          Panel de Administración
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontSize: { xs: "1rem", md: "1.125rem" } }}
        >
          Gestiona estudiantes, clases y asistencias
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={isMobile ? 2 : 3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center", p: { xs: 2, md: 3 } }}>
              <People sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
              <Typography variant="h4" gutterBottom>
                {getTotalStudents()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Estudiantes
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center", p: { xs: 2, md: 3 } }}>
              <School sx={{ fontSize: 40, color: "success.main", mb: 1 }} />
              <Typography variant="h4" gutterBottom>
                {getTotalClasses()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Clases Activas
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center", p: { xs: 2, md: 3 } }}>
              <AttachMoney
                sx={{ fontSize: 40, color: "secondary.main", mb: 1 }}
              />
              <Typography variant="h4" gutterBottom>
                ${getTotalRevenue().toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ingresos Totales
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center", p: { xs: 2, md: 3 } }}>
              <Group sx={{ fontSize: 40, color: "info.main", mb: 1 }} />
              <Typography variant="h4" gutterBottom>
                {getActiveStudents()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Estudiantes Activos
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant={isMobile ? "scrollable" : "fullWidth"}
        >
          <Tab label="Estudiantes" />
          <Tab label="Clases" />
          <Tab label="Asistencias" />
          <Tab label="Pagos" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {activeTab === 0 && (
        <Card>
          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Typography variant="h6" gutterBottom>
              Lista de Estudiantes
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Estudiante</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Niveles</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Clases Inscritas</TableCell>
                    <TableCell>Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {usuarios
                    .filter((u) => u.tipo === "estudiante")
                    .map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Avatar sx={{ mr: 2, width: 32, height: 32 }}>
                              <Person />
                            </Avatar>
                            {user.nombre} {user.apellido}
                          </Box>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {Object.entries(user.niveles || {}).map(
                              ([baile, nivel]) => (
                                <Chip
                                  key={baile}
                                  label={`${baile.replace("-", " ")}: ${nivel}`}
                                  color={getNivelColor(nivel)}
                                  size="small"
                                  sx={{ fontSize: "0.7rem" }}
                                />
                              )
                            )}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={user.estado}
                            color={
                              user.estado === "activo" ? "success" : "default"
                            }
                            size="small"
                          />
                        </TableCell>
                        <TableCell>{user.clasesInscritas.length}</TableCell>
                        <TableCell>
                          <Button size="small" startIcon={<Edit />}>
                            Editar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      )}

      {activeTab === 1 && (
        <Grid container spacing={3}>
          {clases.map((clase) => (
            <Grid item xs={12} md={6} key={clase.id}>
              <Card>
                <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                  <Typography variant="h6" gutterBottom>
                    {clase.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {clase.descripcion}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={clase.nivel}
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Chip
                      label={clase.precio}
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<Schedule />}
                      onClick={() => handleAttendanceClick(clase)}
                    >
                      Asistencia
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<Edit />}
                    >
                      Editar
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {activeTab === 2 && (
        <Card>
          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Typography variant="h6" gutterBottom>
              Control de Asistencias
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Selecciona una clase para registrar asistencias
            </Typography>
            <Grid container spacing={2}>
              {clases.map((clase) => (
                <Grid item xs={12} sm={6} md={4} key={clase.id}>
                  <Card variant="outlined">
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {clase.nombre}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {clase.horarios
                          .map((h) => `${h.dia} ${h.hora}`)
                          .join(", ")}
                      </Typography>
                      <Button
                        fullWidth
                        variant="contained"
                        onClick={() => handleAttendanceClick(clase)}
                      >
                        Registrar Asistencia
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      )}

      {activeTab === 3 && (
        <Card>
          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Typography variant="h6" gutterBottom>
              Historial de Pagos
            </Typography>
            <List>
              {usuarios
                .flatMap((user) =>
                  user.historialPagos.map((pago) => ({
                    ...pago,
                    estudiante: `${user.nombre} ${user.apellido}`,
                    email: user.email,
                  }))
                )
                .map((pago, index) => (
                  <ListItem key={index} divider>
                    <ListItemIcon>
                      <Payment color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={pago.concepto}
                      secondary={`${pago.estudiante} • ${
                        pago.email
                      } • ${new Date(pago.fecha).toLocaleDateString()}`}
                    />
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="h6" color="success.main">
                        ${pago.monto.toLocaleString()}
                      </Typography>
                      <Chip
                        label={pago.estado}
                        color={pago.estado === "pagado" ? "success" : "warning"}
                        size="small"
                      />
                    </Box>
                  </ListItem>
                ))}
            </List>
          </CardContent>
        </Card>
      )}

      {/* Dialog para registrar asistencia */}
      <Dialog
        open={attendanceDialog}
        onClose={() => setAttendanceDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          Registrar Asistencia - {selectedClase?.nombre}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mb: 3 }}>
            <TextField
              fullWidth
              label="Fecha"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
            />
            <Typography variant="h6" gutterBottom>
              Estudiantes Inscritos
            </Typography>
            <List>
              {usuarios
                .filter((user) => user.tipo === "estudiante")
                .filter((user) =>
                  user.clasesInscritas.some(
                    (c) => c.claseId === selectedClase?.id
                  )
                )
                .map((user) => {
                  const inscripcion = user.clasesInscritas.find(
                    (c) => c.claseId === selectedClase?.id
                  );
                  return (
                    <ListItem key={user.id}>
                      <ListItemIcon>
                        <CheckCircle color="success" />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${user.nombre} ${user.apellido}`}
                        secondary={`${user.email} • Nivel: ${inscripcion?.nivel}`}
                      />
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Chip
                          label={inscripcion?.nivel}
                          color={getNivelColor(inscripcion?.nivel)}
                          size="small"
                        />
                        <Button size="small" variant="outlined">
                          Presente
                        </Button>
                      </Box>
                    </ListItem>
                  );
                })}
            </List>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAttendanceDialog(false)}>Cancelar</Button>
          <Button onClick={handleAttendanceSubmit} variant="contained">
            Guardar Asistencia
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default AdminDashboard;
