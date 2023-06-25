import React from "react";
import StoreContext from "./Context";
import useStorage from "../utils/useStorage";

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage("token");
  return (
    <StoreContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
