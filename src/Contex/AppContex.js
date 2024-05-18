import { createContext, useReducer } from "react";
import reducer, { initialValue } from "../Reducer/Reducer";

export const AppContex = createContext();

const AppProvider = ({ children }) => {
  const [state,dispatch] = useReducer(reducer,initialValue);


  const value = {
    user:state.user,
    login:state.login,
    selectItem: state.selectItem,
    setLogin: (value) => {
      dispatch({type:"SET_LOGIN", payload:value})
    },
    setUser:(data) => {
      dispatch({type:"ADD_USER",payload:data})
    },
    setItem: (item) => {
      dispatch({type:"SELECT", payload:item})
    }
  };

  return <AppContex.Provider value={value}>{children}</AppContex.Provider>;
};

export default AppProvider;
