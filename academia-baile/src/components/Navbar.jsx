import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Avatar,
  Divider,
} from "@mui/material";
import { Menu as MenuIcon, Person, Logout, Dashboard } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const { currentUser, logout, isAdmin } = useAuth();

  const menuItems = [
    { text: "Clases", path: "/clases" },
    { text: "Instructores", path: "/instructores" },
    { text: "Eventos", path: "/eventos" },
    { text: "Agenda", path: "/agenda" },
    { text: "Contacto", path: "/contacto" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleUserMenuClose();
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 2 }}>
      <Typography
        variant="h6"
        sx={{
          px: 3,
          py: 2,
          borderBottom: `1px solid ${theme.palette.divider}`,
          mb: 2,
        }}
      >
        Academia Baile
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              color: isActive(item.path) ? "primary.main" : "text.primary",
              "&:hover": {
                backgroundColor: "primary.light",
                color: "primary.contrastText",
              },
              py: 2,
            }}
          >
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{
                fontSize: "1.1rem",
                fontWeight: isActive(item.path) ? 600 : 400,
              }}
            />
          </ListItem>
        ))}
        {currentUser && (
          <>
            <Divider sx={{ my: 1 }} />
            <ListItem
              component={Link}
              to="/dashboard"
              onClick={handleDrawerToggle}
              sx={{
                color: isActive("/dashboard") ? "primary.main" : "text.primary",
                "&:hover": {
                  backgroundColor: "primary.light",
                  color: "primary.contrastText",
                },
                py: 2,
              }}
            >
              <ListItemText 
                primary="Mi Dashboard" 
                primaryTypographyProps={{
                  fontSize: "1.1rem",
                  fontWeight: isActive("/dashboard") ? 600 : 400,
                }}
              />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{ minHeight: { xs: "56px", sm: "64px" } }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              fontWeight: 700,
              fontSize: { xs: "1.1rem", sm: "1.25rem" },
            }}
          >
            Academia Baile
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  color="inherit"
                  sx={{
                    color: isActive(item.path) ? "primary.light" : "inherit",
                    fontSize: "0.9rem",
                    px: 1.5,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              
              {currentUser ? (
                <>
                  <Button
                    component={Link}
                    to="/dashboard"
                    color="inherit"
                    sx={{
                      color: isActive("/dashboard") ? "primary.light" : "inherit",
                      fontSize: "0.9rem",
                      px: 1.5,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    Dashboard
                  </Button>
                  <IconButton
                    onClick={handleUserMenuOpen}
                    sx={{ ml: 1 }}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>
                      <Person />
                    </Avatar>
                  </IconButton>
                </>
              ) : (
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    component={Link}
                    to="/login"
                    color="inherit"
                    variant="outlined"
                    sx={{
                      borderColor: "rgba(255, 255, 255, 0.3)",
                      color: "white",
                      "&:hover": {
                        borderColor: "white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    Iniciar Sesión
                  </Button>
                  <Button
                    component={Link}
                    to="/register"
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "primary.main",
                      "&:hover": {
                        backgroundColor: "grey.100",
                      },
                    }}
                  >
                    Registrarse
                  </Button>
                </Box>
              )}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { 
            boxSizing: "border-box", 
            width: 280,
            backgroundColor: "background.paper",
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* User Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleUserMenuClose}
        sx={{ mt: 1 }}
      >
        <MenuItem onClick={handleUserMenuClose} component={Link} to="/dashboard">
          <Dashboard sx={{ mr: 1 }} />
          Mi Dashboard
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <Logout sx={{ mr: 1 }} />
          Cerrar Sesión
        </MenuItem>
      </Menu>

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
};

export default Navbar;
