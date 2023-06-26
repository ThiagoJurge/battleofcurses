import React from "react";
import StoreContext from "./Context";
import useStorage from "../utils/useStorage";

const StoreProvider = ({ children }) => {
  const [token, setToken] = useStorage("token");
  const [user, setUser] = useStorage("user");
  const [id, setId] = useStorage("id");
  return (
    <StoreContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        id,
        setId,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
