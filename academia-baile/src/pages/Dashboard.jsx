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
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Avatar,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Person,
  School,
  Payment,
  CalendarToday,
  CheckCircle,
  Cancel,
  Schedule,
  AttachMoney,
  MusicNote,
} from "@mui/icons-material";
import { useAuth } from "../context/AuthContext";
import { clases } from "../mockData/clases";

const Dashboard = () => {
  const { currentUser, isAdmin } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeTab, setActiveTab] = useState(0);

  if (!currentUser) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" align="center">
          Por favor inicia sesión para ver tu dashboard
        </Typography>
      </Container>
    );
  }

  if (isAdmin()) {
    // Redirigir a dashboard de admin
    return <AdminDashboard />;
  }

  const getClaseInfo = (claseId) => {
    return clases.find((c) => c.id === claseId);
  };

  const getTotalPagos = () => {
    return currentUser.historialPagos.reduce(
      (total, pago) => total + pago.monto,
      0
    );
  };

  const getAsistenciasTotales = () => {
    return currentUser.clasesInscritas.reduce((total, clase) => {
      return total + clase.asistencias.filter((a) => a.presente).length;
    }, 0);
  };

  const getFaltasTotales = () => {
    return currentUser.clasesInscritas.reduce((total, clase) => {
      return total + clase.asistencias.filter((a) => !a.presente).length;
    }, 0);
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
          ¡Hola, {currentUser.nombre}!
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ fontSize: { xs: "1rem", md: "1.125rem" } }}
        >
          Bienvenido a tu dashboard de Academia Baile
        </Typography>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={isMobile ? 2 : 3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center", p: { xs: 2, md: 3 } }}>
              <School sx={{ fontSize: 40, color: "primary.main", mb: 1 }} />
              <Typography variant="h4" gutterBottom>
                {currentUser.clasesInscritas.length}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Clases Inscritas
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center", p: { xs: 2, md: 3 } }}>
              <CheckCircle
                sx={{ fontSize: 40, color: "success.main", mb: 1 }}
              />
              <Typography variant="h4" gutterBottom>
                {getAsistenciasTotales()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Asistencias
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center", p: { xs: 2, md: 3 } }}>
              <Cancel sx={{ fontSize: 40, color: "error.main", mb: 1 }} />
              <Typography variant="h4" gutterBottom>
                {getFaltasTotales()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Faltas
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
                ${getTotalPagos().toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Pagado
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Profile Info */}
      <Card sx={{ mb: 4 }}>
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <Avatar sx={{ width: 60, height: 60, mr: 2 }}>
              <Person />
            </Avatar>
            <Box>
              <Typography variant="h5" gutterBottom>
                {currentUser.nombre} {currentUser.apellido}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {currentUser.email} • {currentUser.telefono}
              </Typography>
            </Box>
          </Box>

          {/* Niveles por baile */}
          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Mis Niveles por Baile
          </Typography>
          <Grid container spacing={2}>
            {Object.entries(currentUser.niveles || {}).map(([baile, nivel]) => (
              <Grid item xs={12} sm={6} md={4} key={baile}>
                <Card variant="outlined">
                  <CardContent sx={{ p: 2, textAlign: "center" }}>
                    <MusicNote
                      sx={{ fontSize: 30, color: "primary.main", mb: 1 }}
                    />
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{ textTransform: "capitalize" }}
                    >
                      {baile.replace("-", " ")}
                    </Typography>
                    <Chip
                      label={nivel}
                      color={getNivelColor(nivel)}
                      size="small"
                      sx={{ textTransform: "capitalize" }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant={isMobile ? "scrollable" : "fullWidth"}
        >
          <Tab label="Mis Clases" />
          <Tab label="Pagos" />
          <Tab label="Asistencias" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      {activeTab === 0 && (
        <Grid container spacing={3}>
          {currentUser.clasesInscritas.map((inscripcion) => {
            const clase = getClaseInfo(inscripcion.claseId);
            return (
              <Grid item xs={12} md={6} key={inscripcion.claseId}>
                <Card>
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Typography variant="h6" gutterBottom>
                      {clase?.nombre}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                    >
                      {clase?.descripcion}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={inscripcion.estado}
                        color={
                          inscripcion.estado === "activo"
                            ? "success"
                            : "default"
                        }
                        size="small"
                        sx={{ mr: 1 }}
                      />
                      <Chip
                        label={`Nivel: ${inscripcion.nivel}`}
                        color={getNivelColor(inscripcion.nivel)}
                        variant="outlined"
                        size="small"
                        sx={{ mr: 1 }}
                      />
                      <Chip
                        label={clase?.nivel}
                        variant="outlined"
                        size="small"
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      <strong>Inscrito:</strong>{" "}
                      {new Date(
                        inscripcion.fechaInscripcion
                      ).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}

      {activeTab === 1 && (
        <Card>
          <CardContent sx={{ p: { xs: 2, md: 3 } }}>
            <Typography variant="h6" gutterBottom>
              Historial de Pagos
            </Typography>
            <List>
              {currentUser.historialPagos.map((pago) => (
                <ListItem key={pago.id} divider>
                  <ListItemIcon>
                    <Payment color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={pago.concepto}
                    secondary={`${new Date(
                      pago.fecha
                    ).toLocaleDateString()} • ${pago.metodo}`}
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

      {activeTab === 2 && (
        <Grid container spacing={3}>
          {currentUser.clasesInscritas.map((inscripcion) => {
            const clase = getClaseInfo(inscripcion.claseId);
            return (
              <Grid item xs={12} md={6} key={inscripcion.claseId}>
                <Card>
                  <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                    <Typography variant="h6" gutterBottom>
                      {clase?.nombre}
                    </Typography>
                    <List dense>
                      {inscripcion.asistencias.map((asistencia, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            {asistencia.presente ? (
                              <CheckCircle color="success" />
                            ) : (
                              <Cancel color="error" />
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={new Date(
                              asistencia.fecha
                            ).toLocaleDateString()}
                            secondary={
                              asistencia.presente ? "Presente" : "Ausente"
                            }
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
};

// Componente placeholder para AdminDashboard
const AdminDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center">
        Dashboard de Administrador
      </Typography>
      <Typography variant="body1" align="center" sx={{ mt: 2 }}>
        Funcionalidad de administrador en desarrollo...
      </Typography>
    </Container>
  );
};

export default Dashboard;
