import React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  YouTube,
  Twitter,
  Email,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const socialLinks = [
    { icon: <Facebook />, url: "#", label: "Facebook" },
    { icon: <Instagram />, url: "#", label: "Instagram" },
    { icon: <YouTube />, url: "#", label: "YouTube" },
    { icon: <Twitter />, url: "#", label: "Twitter" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.dark",
        color: "white",
        py: { xs: 4, md: 6 },
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={isMobile ? 3 : 4}>
          {/* Información de contacto */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: 600,
                mb: { xs: 2, md: 3 },
              }}
            >
              Academia Baile
            </Typography>
            <Typography 
              variant="body2" 
              paragraph
              sx={{ 
                fontSize: { xs: "0.875rem", md: "1rem" },
                lineHeight: 1.6,
                mb: { xs: 2, md: 3 },
              }}
            >
              Tu lugar para aprender los ritmos más vibrantes del mundo.
              Conectamos culturas a través del baile.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOn sx={{ mr: 1, fontSize: "small" }} />
              <Typography 
                variant="body2"
                sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
              >
                Calle 123 #45-67, Centro
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone sx={{ mr: 1, fontSize: "small" }} />
              <Typography 
                variant="body2"
                sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
              >
                +57 300 123 4567
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Email sx={{ mr: 1, fontSize: "small" }} />
              <Typography 
                variant="body2"
                sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
              >
                info@academiabaile.com
              </Typography>
            </Box>
          </Grid>

          {/* Enlaces rápidos */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: 600,
                mb: { xs: 2, md: 3 },
              }}
            >
              Enlaces Rápidos
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {["Clases", "Instructores", "Eventos", "Agenda", "Contacto"].map(
                (item) => (
                  <Box component="li" key={item} sx={{ mb: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: "pointer",
                        fontSize: { xs: "0.875rem", md: "1rem" },
                        "&:hover": {
                          color: "secondary.light",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                )
              )}
            </Box>
          </Grid>

          {/* Redes sociales */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontSize: { xs: "1.25rem", md: "1.5rem" },
                fontWeight: 600,
                mb: { xs: 2, md: 3 },
              }}
            >
              Síguenos
            </Typography>
            <Typography 
              variant="body2" 
              paragraph
              sx={{ 
                fontSize: { xs: "0.875rem", md: "1rem" },
                lineHeight: 1.6,
                mb: { xs: 2, md: 3 },
              }}
            >
              Mantente conectado con nosotros en redes sociales para ver las
              últimas noticias, videos de clases y eventos especiales.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  aria-label={social.label}
                  sx={{
                    color: "white",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Línea divisoria */}
        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.primary.light}`,
            mt: { xs: 3, md: 4 },
            pt: { xs: 2, md: 3 },
          }}
        >
          <Typography
            variant="body2"
            align="center"
            sx={{ 
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
            }}
          >
            © {new Date().getFullYear()} Academia Baile. Todos los derechos
            reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
