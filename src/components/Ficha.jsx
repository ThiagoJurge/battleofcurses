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
    <Card>
      {contextHolder}
      {char?.length < 1 ? (
        <>
          <Divider />
          <AddCharacter
            openNotificationWithIcon={openNotificationWithIcon}
            fetchData={fetchData}
          />
        </>
      ) : null}
      <ul>
        {char?.map((char, i) => (
            <>
          <li key={i}>Nome: {char.char}</li>
          </>
        ))}
      </ul>
    </Card>
  );
};

export default Ficha;
