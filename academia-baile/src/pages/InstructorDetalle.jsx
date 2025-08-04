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
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ArrowBack,
  Instagram,
  Facebook,
  YouTube,
  School,
  Star,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { instructores } from "../mockData/instructores";
import { clases } from "../mockData/clases";

const InstructorDetalle = () => {
  const { slug } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  
  const instructor = instructores.find((i) => i.slug === slug);
  const instructorClases = instructor
    ? clases.filter((c) => instructor.clases.includes(c.id))
    : [];

  if (!instructor) {
    return (
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, md: 3 } }}>
        <Typography 
          variant="h4" 
          align="center"
          sx={{ fontSize: { xs: "1.75rem", md: "2.125rem" } }}
        >
          Instructor no encontrado
        </Typography>
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Button component={Link} to="/instructores" variant="contained">
            Volver a Instructores
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
          to="/instructores"
          startIcon={<ArrowBack />}
          sx={{ mb: 2 }}
        >
          Volver a Instructores
        </Button>
      </Box>

      <Grid container spacing={isMobile ? 2 : 4}>
        {/* Información principal del instructor */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardMedia
              component="img"
              height={isMobile ? "250" : "400"}
              image={instructor.imagen}
              alt={instructor.nombre}
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
                {instructor.nombre}
              </Typography>

              <Chip
                label={instructor.especialidad}
                color="primary"
                sx={{ 
                  mb: 2,
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              />

              <Chip
                label={`${instructor.experiencia} de experiencia`}
                variant="outlined"
                sx={{ 
                  mb: 3,
                  fontSize: { xs: "0.875rem", md: "1rem" },
                }}
              />

              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 600,
                }}
              >
                Biografía
              </Typography>
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  lineHeight: 1.6,
                }}
              >
                {instructor.biografiaLarga}
              </Typography>

              {/* Certificaciones */}
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  mt: 3,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                  fontWeight: 600,
                }}
              >
                Certificaciones
              </Typography>
              <List dense>
                {instructor.certificaciones.map((cert, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <School color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={cert}
                      primaryTypographyProps={{
                        fontSize: { xs: "0.875rem", md: "1rem" },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Sidebar con redes sociales y clases */}
        <Grid item xs={12} md={4}>
          {/* Redes sociales */}
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
                Sígueme en Redes Sociales
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                <IconButton
                  color="primary"
                  aria-label="Instagram"
                  href={`https://instagram.com/${instructor.redesSociales.instagram.replace(
                    "@",
                    ""
                  )}`}
                  target="_blank"
                  sx={{ 
                    "&:hover": {
                      backgroundColor: "primary.light",
                    },
                  }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="Facebook"
                  href={`https://facebook.com/${instructor.redesSociales.facebook}`}
                  target="_blank"
                  sx={{ 
                    "&:hover": {
                      backgroundColor: "primary.light",
                    },
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="YouTube"
                  href={`https://youtube.com/${instructor.redesSociales.youtube}`}
                  target="_blank"
                  sx={{ 
                    "&:hover": {
                      backgroundColor: "primary.light",
                    },
                  }}
                >
                  <YouTube />
                </IconButton>
              </Box>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  lineHeight: 1.5,
                }}
              >
                Mantente actualizado con mis últimas clases, eventos y consejos
                de baile.
              </Typography>
            </CardContent>
          </Card>

          {/* Clases que imparte */}
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
                Clases que Imparte
              </Typography>
              <List dense>
                {instructorClases.map((clase) => (
                  <ListItem key={clase.id} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Star color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary={clase.nombre}
                      secondary={clase.nivel}
                      primaryTypographyProps={{
                        fontSize: { xs: "0.875rem", md: "1rem" },
                        fontWeight: 500,
                      }}
                      secondaryTypographyProps={{
                        fontSize: { xs: "0.75rem", md: "0.875rem" },
                      }}
                    />
                    <Button
                      component={Link}
                      to={`/clases/${clase.slug}`}
                      variant="outlined"
                      size="small"
                      sx={{
                        fontSize: { xs: "0.75rem", md: "0.875rem" },
                        minWidth: "auto",
                        px: { xs: 1, md: 1.5 },
                      }}
                    >
                      Ver
                    </Button>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default InstructorDetalle;
