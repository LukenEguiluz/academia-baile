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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { instructores } from "../mockData/instructores";

const Instructores = () => {
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
        Nuestros Instructores
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
        Conoce a los expertos que harán de tu experiencia de baile algo
        inolvidable
      </Typography>

      <Grid container spacing={isMobile ? 2 : 4}>
        {instructores.map((instructor) => (
          <Grid item xs={12} sm={6} md={4} key={instructor.id}>
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
                height={isMobile ? "220" : "250"}
                image={instructor.imagen}
                alt={instructor.nombre}
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
                  {instructor.nombre}
                </Typography>

                <Chip
                  label={instructor.especialidad}
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
                  {instructor.biografia}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={`${instructor.experiencia} de experiencia`}
                    variant="outlined"
                    size="small"
                    sx={{ 
                      mr: 1, 
                      mb: 1,
                      fontSize: { xs: "0.75rem", md: "0.875rem" },
                    }}
                  />
                </Box>

                <Box sx={{ mt: "auto" }}>
                  <Button
                    component={Link}
                    to={`/instructores/${instructor.slug}`}
                    variant="contained"
                    fullWidth
                    sx={{
                      py: { xs: 1, md: 1.5 },
                      fontSize: { xs: "0.875rem", md: "1rem" },
                    }}
                  >
                    Ver Perfil Completo
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

export default Instructores;
