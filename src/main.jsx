import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ConfigProvider, theme } from "antd";
const { darkAlgorithm } = theme;
import "antd/dist/reset.css";
import StoreProvider from "./context/Provider.jsx";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
  <StoreProvider>
  <ConfigProvider
    theme={{
      algorithm: [darkAlgorithm],
      token: {
        colorPrimary: "#CC0202",
        wireframe: "true",
      },
    }}
  >
    <App />
  </ConfigProvider>
    </StoreProvider>
    </Router>
);
