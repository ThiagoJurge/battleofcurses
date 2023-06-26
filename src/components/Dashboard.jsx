import React, { useContext, useEffect, useState } from "react";
import { Card } from "antd";
import StoreContext from "../context/Context";

const Dashboard = () => {
  const { user } = useContext(StoreContext);

  return <Card>Bem-vindo(a) {user}</Card>;
};

export default Dashboard;
