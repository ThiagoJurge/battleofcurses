import { Divider, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import Logo from "../../components/Logo";
import AppRoutes from "../../AppRoutes";

const AppContent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Content style={{ margin: "0 16px" }}>
      <Divider>
        <Logo />
      </Divider>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
        }}
      >
        <AppRoutes/>
      </div>
    </Content>
  );
};

export default AppContent;
