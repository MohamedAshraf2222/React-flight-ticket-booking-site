import jwtDecode from "jwt-decode";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export let AuthContext = createContext(0);

export const AuthContextProvider = (props) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  function logout() {
    setUserData(null);
    localStorage.removeItem("userToken");
    navigate("/login");
    // console.log('logout called');
  }
  function SaveUserData() {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
    // console.log(userData);
  }


  return (
    <AuthContext.Provider
      value={{
        logout,
        SaveUserData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
