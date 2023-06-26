import React from 'react'
import { Card } from "antd";
import Background from "../assets/login.png";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingPage = () => {
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <Card
      style={{
        width: "100%",
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      }}
    >
      <center>
        <LoadingOutlined
          style={{
            fontSize: 24,
          }}
          spin
        />
      </center>
    </Card>
  </div>
  )
}

export default LoadingPage