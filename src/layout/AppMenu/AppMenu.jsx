import { LogoutOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useContext } from "react";
import StoreContext from "../../context/Context";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [getItem("Pagina Inicial", "1", <MenuOutlined />)];
const AppMenu = () => {
  const { user, token, id, setToken, setId, setUser } =
    useContext(StoreContext);

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
