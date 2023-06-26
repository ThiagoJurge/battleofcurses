import { createContext } from "react";

const StoreContext = createContext({
  token: null,
  user: null,
  id: null,
  setToken: () => {},
  setUser: () => {},
  setId: () => {},
});

export default StoreContext;
