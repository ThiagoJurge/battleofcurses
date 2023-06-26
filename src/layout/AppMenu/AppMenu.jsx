import {
  LogoutOutlined,
  MenuOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useContext } from "react";
import StoreContext from "../../context/Context";
import { NavLink } from "react-router-dom";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<NavLink to={"/"}>Pagina Inicial</NavLink>, "1", <MenuOutlined />),
  getItem(<NavLink to={"/ficha"}>Ficha</NavLink>, "2", <ProfileOutlined />),
];
const AppMenu = () => {
  const { token, setToken, setId, setUser } = useContext(StoreContext);

  const handleLogout = () => {
    setToken(null);
    setId(null);
    setUser(null);
  };

  const menuItems = token
    ? [...items, getItem("Logout", "logout", <LogoutOutlined />)]
    : items;

  return (
    <Menu
      theme="light"
      defaultSelectedKeys={["1"]}
      mode="inline"
      items={menuItems}
      onSelect={(item) => item.key === "logout" && handleLogout()}
    />
  );
};

export default AppMenu;
