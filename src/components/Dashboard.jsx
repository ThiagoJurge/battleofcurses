import React, { useContext, useEffect, useState } from "react";
import { Button, Card, notification } from "antd";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { collection, addDoc } from "firebase/firestore";
import StoreContext from "../context/Context";
import { db } from "../firebase";
import {
  AddCharacterButton,
  getCharList,
} from "../firebase/firebaseControllers";

const Dashboard = () => {
  const [char, setChar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Personagem criado com sucesso",
      duration: 2,
    });
  };

  const { user, id, setUser } = useContext(StoreContext);

  const fetchData = async () => {
    try {
      const charList = await getCharList(id);
      setChar(charList);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card>
      {contextHolder}
      Bem-vindo(a) {user}
      <p>
        {char?.length < 1 ? (
          <AddCharacterButton
          loading={loading}
            openNotificationWithIcon={openNotificationWithIcon}
            fetchData={fetchData}
          />
        ) : null}
      </p>
      <ul>
        {char?.map((char, i) => (
          <li key={i}>{char.player}</li>
        ))}
      </ul>
    </Card>
  );
};

export default Dashboard;
