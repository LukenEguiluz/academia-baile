import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { CalendarMonth, Schedule, Person, Event } from "@mui/icons-material";
import { horarios } from "../mockData/horarios";

const Agenda = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      maxWidth="lg"
      sx={{ py: { xs: 3, md: 4 }, px: { xs: 2, md: 3 } }}
    >
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          mb: { xs: 2, md: 3 },
        }}
      >
        Agenda de Clases
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
        Consulta los horarios de nuestras clases y reserva tu lugar
      </Typography>

      {/* Información general */}
      <Card sx={{ mb: 4 }}>
        <CardContent sx={{ p: { xs: 2, md: 3 } }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <CalendarMonth sx={{ mr: 2, color: "primary.main" }} />
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                fontWeight: 600,
              }}
            >
              Horarios de Clases
            </Typography>
          </Box>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              lineHeight: 1.6,
            }}
          >
            Nuestras clases están disponibles en diferentes horarios para
            adaptarse a tu agenda. Todas las clases tienen una duración de 60
            minutos y están diseñadas para todos los niveles.
          </Typography>
        </CardContent>
      </Card>

      {/* Horarios semanales */}
      <Box sx={{ mt: { xs: 4, md: 6 } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: { xs: "1.75rem", md: "2.125rem" },
            mb: { xs: 3, md: 4 },
          }}
        >
          Horarios Semanales
        </Typography>
        <Grid container spacing={isMobile ? 1 : 2}>
          {[
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
            "Domingo",
          ].map((day) => {
            const dayEvents = horarios.filter((event) => event.day === day);
            return (
              <Grid item xs={12} sm={6} md={3} key={day}>
                <Paper
                  sx={{
                    p: { xs: 1.5, md: 2 },
                    height: "100%",
                    minHeight: { xs: "120px", md: "auto" },
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="primary"
                    sx={{
                      fontSize: { xs: "1.125rem", md: "1.25rem" },
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    {day}
                  </Typography>
                  {dayEvents.length > 0 ? (
                    <List dense sx={{ p: 0 }}>
                      {dayEvents.map((event) => (
                        <ListItem key={event.id} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <Event color="primary" sx={{ fontSize: "small" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={event.title}
                            secondary={`${event.time} - ${event.instructor}`}
                            primaryTypographyProps={{
                              variant: "body2",
                              fontSize: { xs: "0.75rem", md: "0.875rem" },
                              fontWeight: 500,
                            }}
                            secondaryTypographyProps={{
                              variant: "caption",
                              fontSize: { xs: "0.7rem", md: "0.8rem" },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "0.75rem", md: "0.875rem" },
                        fontStyle: "italic",
                      }}
                    >
                      Sin clases
                    </Typography>
                  )}
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* Información adicional */}
      <Box sx={{ mt: { xs: 4, md: 6 } }}>
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
              Información Importante
            </Typography>
            <Grid container spacing={isMobile ? 2 : 3}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.125rem", md: "1.25rem" },
                    fontWeight: 600,
                  }}
                >
                  Reservas
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  • Las reservas se pueden hacer hasta 24 horas antes de la
                  clase • Cupos limitados por clase (máximo 15 estudiantes) • Se
                  requiere confirmación por WhatsApp o teléfono
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.125rem", md: "1.25rem" },
                    fontWeight: 600,
                  }}
                >
                  Requisitos
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    lineHeight: 1.6,
                  }}
                >
                  • Ropa cómoda para bailar • Zapatos con suela lisa (no tenis)
                  • Llegar 10 minutos antes de la clase • Traer agua para
                  hidratarse
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Agenda;
