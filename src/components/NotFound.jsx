import { Button, Image, Result } from "antd";
import React from "react";
import Image404 from "../assets/notfound.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Result
      title={<span>Essa página não existe...</span>}
      icon={<img src={Image404} alt='NotFoundImage' style={{width: '10%'}} />}
      extra={
        <Button type="primary" onClick={() => navigate("/")}>
          <span>Voltar</span>
        </Button>
      }
    />
  );
};

export default NotFound;
