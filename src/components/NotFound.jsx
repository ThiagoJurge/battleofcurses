import { Button, Image, Result } from "antd";
import React from "react";
import Image404 from "../assets/notfound.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Result
      title="Essa página não existe..."
      icon={<img src={Image404} alt='NotFoundImage' style={{width: '10%'}} />}
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          Voltar
        </Button>
      }
    />
  );
};

export default NotFound;
