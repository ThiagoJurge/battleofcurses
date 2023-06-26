import { getDocs, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import React, { useContext } from 'react';
import StoreContext from '../context/Context';
import { UsergroupAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';

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

export const AddCharacterButton = ({ loading, openNotificationWithIcon, fetchData }) => {
    const { user, id } = useContext(StoreContext);
  
    const handleAddCharacter = async () => {
      setLoading(true);
      try {
        const docRef = await addDoc(collection(db, id), {
          player: user,
        });
        openNotificationWithIcon("success");
      } catch (error) {
        console.error("Error adding document: ", error);
      } finally {
        setLoading(false);
        fetchData();
      }
    };
  
    return (
      <Button
        icon={<UsergroupAddOutlined />}
        onClick={handleAddCharacter}
        loading={loading}
      >
        Criar personagem
      </Button>
    );
  };
  