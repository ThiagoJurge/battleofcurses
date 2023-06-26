import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import React, { useContext, useState } from "react";
import StoreContext from "../context/Context";
import { Button, Checkbox, Form, Input } from "antd";

export const getCharList = async (id) => {
  try {
    const response = await getDocs(collection(db, id));
    const newData = response.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return newData;
  } catch (error) {
    console.error("Error fetching documents: ", error);
    throw error;
  }
};

export const AddCharacter = ({ openNotificationWithIcon, fetchData }) => {
  const { id } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, id), values);
      openNotificationWithIcon("success");
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      fetchData();
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nome do personagem"
        name="char"
        rules={[
          {
            required: true,
            message: "Este campo é obrigatório",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
