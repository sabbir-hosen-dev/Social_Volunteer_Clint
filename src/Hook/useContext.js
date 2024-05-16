import { useContext } from "react";
import { AppContex } from "../Contex/AppContex";

const useAppContex = () => {
  return useContext(AppContex)
}

export default useAppContex;