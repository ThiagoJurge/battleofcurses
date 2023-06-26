import { Card, Divider, List, notification } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AddCharacter, getCharList } from "../firebase/firebaseControllers";
import StoreContext from "../context/Context";

const Ficha = () => {
  const [api, contextHolder] = notification.useNotification();
  const [char, setChar] = useState([]);
  const { id } = useContext(StoreContext);

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Personagem criado com sucesso",
      duration: 2,
    });
  };
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
    <>
      {contextHolder}
      {char?.length < 1 ? (
        <>
          <Divider />
          <AddCharacter
            openNotificationWithIcon={openNotificationWithIcon}
            fetchData={fetchData}
          />
        </>
      ) : (
        <List
          header={<div>Ficha</div>}
          bordered
          dataSource={char}
          renderItem={(item, i) => (
            <List.Item key={i}>Nome: {item.char}</List.Item>
          )}
        />
      )}
    </>
  );
};

export default Ficha;
