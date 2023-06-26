import Sider from "antd/es/layout/Sider";
import React, { useState } from "react";
import AppMenu from "../AppMenu/AppMenu";
import Logotipo from '/favicon.png'
import { Divider } from "antd";

const AppSider = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme="light"
    >
      <img src={Logotipo} width={'100%'}/>
      <Divider/>
      <AppMenu />
    </Sider>
  );
};

export default AppSider;
