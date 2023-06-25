import React, { useContext } from "react";
import { Button, Card, Typography } from "antd";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { GoogleOutlined } from "@ant-design/icons";
import db from "../firebase";
import StoreContext from "../context/Context";
import Logo from "./Logo";
const { Title } = Typography;

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const { setToken } = useContext(StoreContext);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setToken(token);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 0,
        }}
      >
        <Logo/>
        <Button
          type="primary"
          icon={<GoogleOutlined />}
          onClick={handleGoogleSignIn}
          style={{ width: "100%" }}
        >
          ENTRE COM O GOOGLE
        </Button>
      </Card>
    </div>
  );
};

export default Login;
