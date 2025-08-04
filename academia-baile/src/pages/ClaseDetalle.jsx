import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Schedule,
  Person,
  AttachMoney,
  Star,
  ArrowBack,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { clases } from "../mockData/clases";
import { instructores } from "../mockData/instructores";

const ClaseDetalle = () => {
  const { slug } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const clase = clases.find((c) => c.slug === slug);
  const instructor = clase
    ? instructores.find((i) => i.id === clase.instructorId)
    : null;

  if (!clase) {
    return (
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, md: 3 } }}>
        <Typography 
          variant="h4" 
          align="center"
          sx={{ fontSize: { xs: "1.75rem", md: "2.125rem" } }}
        >
          Clase no encontrada
        </Typography>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button component={Link} to="/clases" variant="contained">
            Volver a Clases
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, md: 3 } }}>
      {/* Breadcrumb */}
      <Box sx={{ mb: 3 }}>
        <Button
          component={Link}
          to="/clases"
          startIcon={<ArrowBack />}
          sx={{ mb: 2 }}
        >
          Volver a Clases
        </Button>
      </Box>

      <Grid container spacing={isMobile ? 2 : 4}>
        {/* Imagen y información principal */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardMedia
              component="img"
              height={isMobile ? "250" : "400"}
              image={clase.imagen}
              alt={clase.nombre}
              sx={{ objectFit: "cover" }}
            />
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  fontWeight: 700,
                }}
              >
                {clase.nombre}
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Chip
                  label={clase.nivel}
                  color="primary"
                  sx={{ 
                    mr: 1, 
                    mb: 1,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                />
                <Chip
                  label={clase.duracion}
                  variant="outlined"
                  sx={{ 
                    mr: 1, 
                    mb: 1,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }}
                />
                <Chip 
                  label={clase.precio} 
                  color="secondary" 
                  sx={{ 
                    mb: 1,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                  }} 
                />
              </Box>

              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 600,
                }}
              >
                Descripción
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  lineHeight: 1.6,
                }}
              >
                {clase.descripcionLarga}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Sidebar con instructor y horarios */}
        <Grid item xs={12} md={4}>
          {/* Información del instructor */}
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 600,
                }}
              >
                Instructor
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar
                  src={instructor?.imagen}
                  sx={{ 
                    width: { xs: 50, md: 60 }, 
                    height: { xs: 50, md: 60 }, 
                    mr: 2 
                  }}
                />
                <Box>
                  <Typography 
                    variant="h6"
                    sx={{ 
                      fontSize: { xs: "1.125rem", md: "1.25rem" },
                      fontWeight: 600,
                    }}
                  >
                    {instructor?.nombre}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                  >
                    {instructor?.especialidad}
                  </Typography>
                </Box>
              </Box>
              <Typography 
                variant="body2" 
                paragraph
                sx={{ 
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  lineHeight: 1.5,
                }}
              >
                {instructor?.biografia}
              </Typography>
              <Button
                component={Link}
                to={`/instructores/${instructor?.slug}`}
                variant="outlined"
                fullWidth
                sx={{
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                Ver Perfil Completo
              </Button>
            </CardContent>
          </Card>

          {/* Horarios */}
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 600,
                }}
              >
                Horarios Disponibles
              </Typography>
              <List dense>
                {clase.horarios.map((horario, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Schedule color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={`${horario.dia} - ${horario.hora}`}
                      primaryTypographyProps={{
                        fontSize: { xs: "0.875rem", md: "1rem" },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          {/* Botón de reserva */}
          <Card>
            <CardContent sx={{ p: { xs: 2, md: 3 } }}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 600,
                }}
              >
                Reservar Clase
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary" 
                paragraph
                sx={{ 
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              >
                Asegura tu lugar en esta clase especializada
              </Typography>
              <Button 
                variant="contained" 
                size="large" 
                fullWidth 
                sx={{ 
                  mb: 2,
                  py: { xs: 1.5, md: 2 },
                  fontSize: { xs: "1rem", md: "1.125rem" },
                }}
              >
                Reservar Ahora
              </Button>
              <Typography 
                variant="caption" 
                color="text.secondary"
                sx={{ fontSize: { xs: "0.75rem", md: "0.875rem" } }}
              >
                * Cupos limitados por clase
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClaseDetalle;
