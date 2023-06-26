import React from "react";
import { useContext } from "react";
import StoreContext from "../../context/Context";
import Login from "../Login";

const RoutePrivate = ({ children }) => {
  const { token } = useContext(StoreContext);
  if (!token) {
    return <Login />;
  }
  return children;
};

export default RoutePrivate;
