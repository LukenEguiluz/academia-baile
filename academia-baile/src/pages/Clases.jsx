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
import { clases } from "../mockData/clases";

const Clases = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
        Nuestras Clases
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
        Descubre los ritmos más vibrantes del mundo con nuestros instructores
        expertos
      </Typography>

      <Grid container spacing={isMobile ? 2 : 4}>
        {clases.map((clase) => (
          <Grid item xs={12} sm={6} md={4} key={clase.id}>
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
                height={isMobile ? "180" : "200"}
                image={clase.imagen}
                alt={clase.nombre}
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
                  {clase.nombre}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary" 
                  paragraph
                  sx={{ 
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    mb: 2,
                  }}
                >
                  {clase.descripcion}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={clase.nivel}
                    color="primary"
                    size="small"
                    sx={{ 
                      mr: 1, 
                      mb: 1,
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                    }}
                  />
                  <Chip
                    label={clase.duracion}
                    variant="outlined"
                    size="small"
                    sx={{ 
                      mr: 1, 
                      mb: 1,
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                    }}
                  />
                  <Chip
                    label={clase.precio}
                    color="secondary"
                    size="small"
                    sx={{ 
                      mb: 1,
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                    }}
                  />
                </Box>

                <Box sx={{ mt: "auto" }}>
                  <Button
                    component={Link}
                    to={`/clases/${clase.slug}`}
                    variant="contained"
                    fullWidth
                    sx={{
                      py: { xs: 1, md: 1.5 },
                      fontSize: { xs: "0.875rem", md: "1rem" },
                    }}
                  >
                    Ver Detalles
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

export default Clases;
