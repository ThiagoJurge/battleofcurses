import React, { useContext, useState } from "react";
import { Button, Card, Typography } from "antd";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { GoogleOutlined } from "@ant-design/icons";
import { db } from "../firebase";
import StoreContext from "../context/Context";
import Background from "../assets/login.png";
import Logo from "./Logo";

const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const { setToken, setUser, setId } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user.displayName;
        const id = result.user.uid;
        setToken(token);
        setUser(user);
        setId(id);
        setLoading(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        setLoading(true);
      })
  };

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
          <Logo />
          <Button
            loading={loading}
            type="primary"
            icon={<GoogleOutlined />}
            onClick={handleGoogleSignIn}
            size="large"
          >
            ENTRE COM O GOOGLE
          </Button>
        </center>
      </Card>
    </div>
  );
};

export default Login;
