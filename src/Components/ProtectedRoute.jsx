import React from 'react'
import { Navigate, useLocation } from "react-router-dom"

const useAuth = () => {
  if (localStorage.getItem('userToken') === null) {
    return false;
  } else {
    return true
  }
};



const ProtectedRoute = ({ children }) => {
  const isAuth = useAuth();
  let location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children

};

export default ProtectedRoute;


// const user = true;
// import { Navigate, Outlet } from "react-router-dom";
// import Login from "../Pages/Login";

// const ProtectedRoute = () => {
//   const isAuth = useAuth();
//   return isAuth ? <Outlet /> : < Login/>;
// };

// export default ProtectedRoute;