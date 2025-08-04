import React, { createContext, useContext, useState, useEffect } from "react";
import { usuarios, admin } from "../mockData/usuarios";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Verificar si hay un usuario guardado en localStorage al cargar
  useEffect(() => {
    const savedUser = localStorage.getItem("academiaUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Buscar en usuarios normales
    let user = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    // Si no se encuentra, buscar en admin
    if (!user) {
      if (admin.email === email && admin.password === password) {
        user = admin;
      }
    }

    if (user) {
      setCurrentUser(user);
      localStorage.setItem("academiaUser", JSON.stringify(user));
      return { success: true, user };
    } else {
      return { success: false, error: "Credenciales incorrectas" };
    }
  };

  const register = (userData) => {
    // Verificar si el email ya existe
    const existingUser = usuarios.find((u) => u.email === userData.email);
    if (existingUser) {
      return { success: false, error: "El email ya está registrado" };
    }

    // Crear nuevo usuario con niveles específicos por baile
    const newUser = {
      id: usuarios.length + 1,
      ...userData,
      fechaRegistro: new Date().toISOString().split("T")[0],
      estado: "activo",
      tipo: "estudiante",
      clasesInscritas: [],
      historialPagos: [],
      // Asegurar que tenga niveles para todos los bailes
      niveles: {
        salsa: userData.niveles?.salsa || "basico",
        bachata: userData.niveles?.bachata || "basico",
        merengue: userData.niveles?.merengue || "basico",
        "cha-cha-cha": userData.niveles?.["cha-cha-cha"] || "basico",
        "rumba/timba": userData.niveles?.["rumba/timba"] || "basico",
      },
    };

    // En un caso real, esto se guardaría en la base de datos
    // Por ahora, solo simulamos el registro
    setCurrentUser(newUser);
    localStorage.setItem("academiaUser", JSON.stringify(newUser));
    return { success: true, user: newUser };
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("academiaUser");
  };

  const updateUser = (updatedData) => {
    const updatedUser = { ...currentUser, ...updatedData };
    setCurrentUser(updatedUser);
    localStorage.setItem("academiaUser", JSON.stringify(updatedUser));
  };

  const updateUserNiveles = (niveles) => {
    const updatedUser = {
      ...currentUser,
      niveles: { ...currentUser.niveles, ...niveles },
    };
    setCurrentUser(updatedUser);
    localStorage.setItem("academiaUser", JSON.stringify(updatedUser));
  };

  const isAdmin = () => {
    return currentUser?.tipo === "admin";
  };

  const isStudent = () => {
    return currentUser?.tipo === "estudiante";
  };

  const getUserNivel = (baile) => {
    return currentUser?.niveles?.[baile] || "basico";
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    updateUser,
    updateUserNiveles,
    isAdmin,
    isStudent,
    getUserNivel,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
