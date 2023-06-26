import {
  FileOutlined,
  LogoutOutlined,
  MenuOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Card, Divider, Layout, Menu, theme } from "antd";
import { useContext, useState } from "react";
import Logo from "./Logo";
import StoreContext from "../context/Context";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [getItem("Pagina Inicial", "1", <MenuOutlined />)];

const Dashboard = () => {
  const { user, token, id, setToken, setId, setUser } =
    useContext(StoreContext);
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {
    setToken(null);
    setId(null);
    setUser(null);
  };

  const menuItems = token
    ? [...items, getItem("Logout", "logout", <LogoutOutlined />)]
    : items;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={menuItems}
          onSelect={(item) => item.key === "logout" && handleLogout()}
        />
      </Sider>
      <Layout>
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
            <Card>Bem-vindo(a) {user}</Card>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          BOC ©2023 Desenvolvido por T Jurge
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
