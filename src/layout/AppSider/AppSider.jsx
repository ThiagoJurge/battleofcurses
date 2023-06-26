import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import AppMenu from "../AppMenu/AppMenu";

const AppSider = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme="light"
    >
      <AppMenu />
    </Sider>
  );
};

export default AppSider;
