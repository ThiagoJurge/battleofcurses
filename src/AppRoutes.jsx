import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import RoutePrivate from "./components/privateroute/PrivateRoute";
import Ficha from "./components/Ficha";
import NotFound from "./components/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/ficha" element={<Ficha/>}/>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};

export default AppRoutes;
