import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "./fonts/Fonts.css";
import "./App.css";
import RoutePrivate from "./components/privateroute/PrivateRoute";
const App = () => {
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

export default App;
