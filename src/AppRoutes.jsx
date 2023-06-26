import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import RoutePrivate from "./components/privateroute/PrivateRoute";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <RoutePrivate>
              <Dashboard />
            </RoutePrivate>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
