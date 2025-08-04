import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Alert,
  Snackbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Email, Phone, LocationOn, Send } from "@mui/icons-material";

const Contacto = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío del formulario
    setSnackbar({
      open: true,
      message: "¡Mensaje enviado con éxito! Te contactaremos pronto.",
      severity: "success",
    });
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, md: 3 } }}>
      <Typography 
        variant="h2" 
        align="center" 
        gutterBottom
        sx={{ 
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          mb: { xs: 2, md: 3 },
        }}
      >
        Contáctanos
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        paragraph
        sx={{ 
          mb: { xs: 4, md: 6 },
          fontSize: { xs: "1rem", md: "1.125rem" },
          px: { xs: 1, md: 0 },
        }}
      >
        ¿Tienes preguntas? Estamos aquí para ayudarte
      </Typography>

      <Grid container spacing={isMobile ? 2 : 4}>
        {/* Información de contacto */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  fontWeight: 600,
                  mb: { xs: 2, md: 3 },
                }}
              >
                Información de Contacto
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <LocationOn color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography 
                      variant="h6"
                      sx={{ 
                        fontSize: { xs: "1.125rem", md: "1.25rem" },
                        fontWeight: 600,
                      }}
                    >
                      Dirección
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ 
                        fontSize: { xs: "0.875rem", md: "1rem" },
                        lineHeight: 1.5,
                      }}
                    >
                      Calle 123 #45-67, Centro
                      <br />
                      Bogotá, Colombia
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Phone color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography 
                      variant="h6"
                      sx={{ 
                        fontSize: { xs: "1.125rem", md: "1.25rem" },
                        fontWeight: 600,
                      }}
                    >
                      Teléfono
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ 
                        fontSize: { xs: "0.875rem", md: "1rem" },
                      }}
                    >
                      +57 300 123 4567
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Email color="primary" sx={{ mr: 2 }} />
                  <Box>
                    <Typography 
                      variant="h6"
                      sx={{ 
                        fontSize: { xs: "1.125rem", md: "1.25rem" },
                        fontWeight: 600,
                      }}
                    >
                      Email
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ 
                        fontSize: { xs: "0.875rem", md: "1rem" },
                      }}
                    >
                      info@academiabaile.com
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: "1.125rem", md: "1.25rem" },
                  fontWeight: 600,
                }}
              >
                Horarios de Atención
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                paragraph
                sx={{ 
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  lineHeight: 1.6,
                }}
              >
                <strong>Lunes a Viernes:</strong> 8:00 AM - 10:00 PM
                <br />
                <strong>Sábados:</strong> 9:00 AM - 8:00 PM
                <br />
                <strong>Domingos:</strong> 10:00 AM - 6:00 PM
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Formulario de contacto */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography 
                variant="h5" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                  fontWeight: 600,
                  mb: { xs: 2, md: 3 },
                }}
              >
                Envíanos un Mensaje
              </Typography>

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nombre completo"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiInputLabel-root": {
                          fontSize: { xs: "0.875rem", md: "1rem" },
                        },
                        "& .MuiInputBase-input": {
                          fontSize: { xs: "0.875rem", md: "1rem" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiInputLabel-root": {
                          fontSize: { xs: "0.875rem", md: "1rem" },
                        },
                        "& .MuiInputBase-input": {
                          fontSize: { xs: "0.875rem", md: "1rem" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Teléfono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      sx={{
                        "& .MuiInputLabel-root": {
                          fontSize: { xs: "0.875rem", md: "1rem" },
                        },
                        "& .MuiInputBase-input": {
                          fontSize: { xs: "0.875rem", md: "1rem" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiInputLabel-root": {
                          fontSize: { xs: "0.875rem", md: "1rem" },
                        },
                        "& .MuiInputBase-input": {
                          fontSize: { xs: "0.875rem", md: "1rem" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Mensaje"
                      name="mensaje"
                      multiline
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiInputLabel-root": {
                          fontSize: { xs: "0.875rem", md: "1rem" },
                        },
                        "& .MuiInputBase-input": {
                          fontSize: { xs: "0.875rem", md: "1rem" },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      fullWidth
                      sx={{
                        py: { xs: 1.5, md: 2 },
                        fontSize: { xs: "1rem", md: "1.125rem" },
                      }}
                    >
                      Enviar Mensaje
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contacto;
