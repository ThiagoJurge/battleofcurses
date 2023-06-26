import React, { useContext, useEffect, useState } from "react";
import { Card } from "antd";
import StoreContext from "../context/Context";
import Paragraph from "antd/es/typography/Paragraph";

const Dashboard = () => {
  const { user } = useContext(StoreContext);

  return <Paragraph>Bem-vindo(a) {user}</Paragraph>;
};

export default Dashboard;
