import { Card, Divider, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import Logo from "../../components/Logo";
import AppRoutes from "../../AppRoutes";
import Background from "../../assets/background.jpg";

const AppContent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: "0 16px",
        height: "100vh",
        background: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Divider
        style={{
          background: "rgb(0,0,0,0.8)",
        }}
      >
        <Logo />
      </Divider>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "rgb(0,0,0,0.8)",
        }}
      >
        <AppRoutes />
      </div>
    </Content>
  );
};

export default AppContent;
