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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = login(formData.email, formData.password);
    
    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.error);
    }
    
    setLoading(false);
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
        <Card sx={{ width: "100%", maxWidth: 400 }}>
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
              Iniciar Sesión
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                sx={{ mb: 3 }}
                size={isMobile ? "medium" : "large"}
              />

              <TextField
                fullWidth
                label="Contraseña"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                sx={{ mb: 4 }}
                size={isMobile ? "medium" : "large"}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                size="large"
                sx={{
                  py: { xs: 1.5, md: 2 },
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  mb: 3,
                }}
              >
                {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Button>

              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  ¿No tienes cuenta?{" "}
                  <MuiLink component={Link} to="/register" color="primary">
                    Regístrate aquí
                  </MuiLink>
                </Typography>
              </Box>
            </Box>

            {/* Información de prueba */}
            <Box sx={{ mt: 4, p: 2, bgcolor: "grey.50", borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom>
                Cuentas de Prueba:
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                <strong>Estudiante:</strong> maria.garcia@email.com / password123
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                <strong>Admin:</strong> admin@academiabaile.com / admin123
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Login; 