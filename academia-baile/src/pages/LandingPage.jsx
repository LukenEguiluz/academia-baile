import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { MusicNote, People, Event, Schedule } from "@mui/icons-material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const features = [
    {
      icon: <MusicNote sx={{ fontSize: { xs: 32, md: 40 }, color: "primary.main" }} />,
      title: "Clases Especializadas",
      description:
        "Aprende salsa, bachata, merengue y más con instructores certificados.",
    },
    {
      icon: <People sx={{ fontSize: { xs: 32, md: 40 }, color: "primary.main" }} />,
      title: "Instructores Expertos",
      description:
        "Nuestros instructores tienen años de experiencia y pasión por la enseñanza.",
    },
    {
      icon: <Event sx={{ fontSize: { xs: 32, md: 40 }, color: "primary.main" }} />,
      title: "Eventos Especiales",
      description: "Participa en competencias, talleres y fiestas temáticas.",
    },
    {
      icon: <Schedule sx={{ fontSize: { xs: 32, md: 40 }, color: "primary.main" }} />,
      title: "Horarios Flexibles",
      description:
        "Clases disponibles en diferentes horarios para adaptarse a tu agenda.",
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=600&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: { xs: "70vh", md: "80vh" },
          display: "flex",
          alignItems: "center",
          color: "white",
          px: { xs: 2, md: 0 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                  fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Academia Baile
              </Typography>
              <Typography
                variant="h4"
                paragraph
                sx={{
                  mb: 4,
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Tu lugar para aprender los ritmos más vibrantes del mundo
              </Typography>
              <Typography
                variant="h6"
                paragraph
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Conectamos culturas a través del baile. Desde principiantes
                hasta avanzados, tenemos el programa perfecto para ti.
              </Typography>
              <Box 
                sx={{ 
                  display: "flex", 
                  gap: 2, 
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  component={Link}
                  to="/clases"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: "primary.main",
                    minWidth: { xs: "140px", sm: "160px" },
                    "&:hover": {
                      backgroundColor: "primary.dark",
                    },
                  }}
                >
                  Ver Clases
                </Button>
                <Button
                  component={Link}
                  to="/instructores"
                  variant="outlined"
                  size="large"
                  sx={{
                    color: "white",
                    borderColor: "white",
                    minWidth: { xs: "140px", sm: "160px" },
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Conocer Instructores
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom 
          sx={{ 
            mb: 6,
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          ¿Por qué elegirnos?
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: { xs: 2, md: 3 },
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ fontSize: { xs: "1.1rem", md: "1.25rem" } }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          py: { xs: 6, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                ¿Listo para empezar?
              </Typography>
              <Typography 
                variant="h6" 
                paragraph
                sx={{ 
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Únete a nuestra comunidad de bailarines y descubre la pasión por
                el baile. ¡Tu primera clase está a solo un clic de distancia!
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <Button
                  component={Link}
                  to="/contacto"
                  variant="contained"
                  size="large"
                  fullWidth={isMobile}
                  sx={{
                    backgroundColor: "white",
                    color: "primary.main",
                    minWidth: { xs: "200px", md: "auto" },
                    "&:hover": {
                      backgroundColor: "grey.100",
                    },
                  }}
                >
                  Contactar
                </Button>
                <Button
                  component={Link}
                  to="/agenda"
                  variant="outlined"
                  size="large"
                  fullWidth={isMobile}
                  sx={{
                    color: "white",
                    borderColor: "white",
                    minWidth: { xs: "200px", md: "auto" },
                    "&:hover": {
                      borderColor: "white",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Ver Agenda
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
