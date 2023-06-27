import { Card, Descriptions, Divider, List, notification } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AddCharacter, getCharList } from "../firebase/firebaseControllers";
import StoreContext from "../context/Context";
import Paragraph from "antd/es/typography/Paragraph";

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
        <Descriptions
          title="Ficha"
          layout="horizontal"
          column={1}
          bordered
          size="middle"
          labelStyle={{ fontSize: "20px" }}
        >
          {char.map((item) => (
            <>
              <Descriptions.Item label="Nome">{item.char}</Descriptions.Item>
              <Descriptions.Item label="Idade">{item.idade}</Descriptions.Item>
              <Descriptions.Item label="Sexo">{item.sexo}</Descriptions.Item>
              <Descriptions.Item label="História">
                {item.historia}
              </Descriptions.Item>
              <Descriptions.Item label="Personalidade">
                {item.personalidade}
              </Descriptions.Item>
            </>
          ))}
        </Descriptions>
      )}
    </>
  );
};

export default Ficha;
