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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { eventos } from "../mockData/eventos";

const Eventos = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
        Próximos Eventos
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
        Participa en nuestros eventos especiales, talleres y competencias
      </Typography>

      <Grid container spacing={isMobile ? 2 : 4}>
        {eventos.map((evento) => (
          <Grid item xs={12} md={6} key={evento.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              <CardMedia
                component="img"
                height={isMobile ? "200" : "250"}
                image={evento.imagen}
                alt={evento.titulo}
                sx={{ objectFit: "cover" }}
              />
              <CardContent
                sx={{ 
                  flexGrow: 1, 
                  display: "flex", 
                  flexDirection: "column",
                  p: { xs: 2, md: 3 },
                }}
              >
                <Typography 
                  variant="h5" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    fontWeight: 600,
                  }}
                >
                  {evento.titulo}
                </Typography>

                <Chip 
                  label={evento.categoria} 
                  color="primary" 
                  sx={{ 
                    mb: 2,
                    fontSize: { xs: "0.75rem", md: "0.875rem" },
                  }} 
                />

                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  paragraph
                  sx={{ 
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    mb: 2,
                    lineHeight: 1.5,
                  }}
                >
                  {evento.descripcion}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                      mb: 0.5,
                    }}
                  >
                    <strong>Fecha:</strong> {formatDate(evento.fecha)}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                      mb: 0.5,
                    }}
                  >
                    <strong>Hora:</strong> {evento.hora}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                      mb: 0.5,
                    }}
                  >
                    <strong>Ubicación:</strong> {evento.ubicacion}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                      mb: 1,
                    }}
                  >
                    <strong>Precio:</strong> {evento.precio}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  <Chip
                    label={`${evento.cuposDisponibles} cupos disponibles`}
                    color={evento.cuposDisponibles > 10 ? "success" : "warning"}
                    size="small"
                    sx={{ 
                      fontSize: { xs: "0.7rem", md: "0.8rem" },
                    }}
                  />
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                    }}
                  >
                    {evento.cuposDisponibles}/{evento.cuposTotales} cupos
                  </Typography>
                </Box>

                <Box sx={{ mt: "auto" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    disabled={evento.cuposDisponibles === 0}
                    sx={{
                      py: { xs: 1, md: 1.5 },
                      fontSize: { xs: "0.875rem", md: "1rem" },
                    }}
                  >
                    {evento.cuposDisponibles > 0 ? "Inscribirse" : "Agotado"}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Eventos;
