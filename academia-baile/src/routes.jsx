import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Clases from "./pages/Clases";
import ClaseDetalle from "./pages/ClaseDetalle";
import Instructores from "./pages/Instructores";
import InstructorDetalle from "./pages/InstructorDetalle";
import Eventos from "./pages/Eventos";
import Contacto from "./pages/Contacto";
import Agenda from "./pages/Agenda";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/clases" element={<Clases />} />
      <Route path="/clases/:slug" element={<ClaseDetalle />} />
      <Route path="/instructores" element={<Instructores />} />
      <Route path="/instructores/:slug" element={<InstructorDetalle />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
