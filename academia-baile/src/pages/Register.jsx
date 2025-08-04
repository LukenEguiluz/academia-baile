import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
  Alert,
  Link as MuiLink,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { clases } from "../mockData/clases";
import { ExpandMore } from "@mui/icons-material";

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
    telefono: "",
    fechaNacimiento: "",
    niveles: {
      salsa: "basico",
      bachata: "basico",
      merengue: "basico",
      "cha-cha-cha": "basico",
      "rumba/timba": "basico",
    },
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Limpiar error al escribir
  };

  const handleNivelChange = (baile, nivel) => {
    setFormData({
      ...formData,
      niveles: {
        ...formData.niveles,
        [baile]: nivel,
      },
    });
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return false;
    }
    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    const { confirmPassword, ...userData } = formData;
    const result = register(userData);

    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.error);
    }

    setLoading(false);
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

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 3, md: 4 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "80vh",
          justifyContent: "center",
        }}
      >
        <Card sx={{ width: "100%", maxWidth: 600 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontSize: { xs: "1.75rem", md: "2.125rem" },
                fontWeight: 700,
                mb: 3,
              }}
            >
              Crear Cuenta
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    size={isMobile ? "medium" : "large"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    size={isMobile ? "medium" : "large"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    size={isMobile ? "medium" : "large"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Teléfono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    size={isMobile ? "medium" : "large"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Fecha de Nacimiento"
                    name="fechaNacimiento"
                    type="date"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                    required
                    InputLabelProps={{ shrink: true }}
                    size={isMobile ? "medium" : "large"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Contraseña"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    size={isMobile ? "medium" : "large"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Confirmar Contraseña"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    size={isMobile ? "medium" : "large"}
                  />
                </Grid>
              </Grid>

              {/* Niveles por baile */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Niveles por Tipo de Baile
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Selecciona tu nivel en cada tipo de baile que te interese
                </Typography>

                <Grid container spacing={2}>
                  {Object.entries(formData.niveles).map(([baile, nivel]) => (
                    <Grid item xs={12} sm={6} key={baile}>
                      <Card variant="outlined">
                        <CardContent sx={{ p: 2 }}>
                          <Typography
                            variant="subtitle1"
                            gutterBottom
                            sx={{ textTransform: "capitalize" }}
                          >
                            {baile.replace("-", " ")}
                          </Typography>
                          <Box
                            sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}
                          >
                            {["basico", "intermedio", "avanzado"].map(
                              (nivelOption) => (
                                <Chip
                                  key={nivelOption}
                                  label={nivelOption}
                                  color={
                                    nivel === nivelOption
                                      ? getNivelColor(nivelOption)
                                      : "default"
                                  }
                                  variant={
                                    nivel === nivelOption
                                      ? "filled"
                                      : "outlined"
                                  }
                                  size="small"
                                  onClick={() =>
                                    handleNivelChange(baile, nivelOption)
                                  }
                                  sx={{ textTransform: "capitalize" }}
                                />
                              )
                            )}
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                size="large"
                sx={{
                  py: { xs: 1.5, md: 2 },
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  mt: 4,
                  mb: 3,
                }}
              >
                {loading ? "Creando cuenta..." : "Crear Cuenta"}
              </Button>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  ¿Ya tienes cuenta?{" "}
                  <MuiLink component={Link} to="/login" color="primary">
                    Inicia sesión aquí
                  </MuiLink>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Register;
