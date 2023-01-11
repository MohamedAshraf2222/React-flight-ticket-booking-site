//utilities
// import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./Components/ProtectedRoute";
import Booking from "./Pages/Booking";
//Pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";
import Payment from "./Pages/Payment";
import Print from "./Pages/Print";
import Register from "./Pages/Register";



function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <><Navbar /><Home /></>,
  //   },
  //   {
  //     path: "/home",
  //     element: <><Navbar /> <Home /></>,
  //   },
  //   {
  //     path: "/login",
  //     element: <><Login /></>,
  //   },
  //   {
  //     path: "/register",
  //     element: <><Register /></>,
  //   },
  //   {
  //     path: "/booking",
  //     element: <><Booking /></>,
  //   },
  //   {
  //     path: "/payment",
  //     element: <><Payment /></>,
  //   },
  //   {
  //     path: "/print",
  //     element: <><Print /></>,
  //   }
  // ]);
  const [userData, setUserData] = useState(null)
  function logout() {
    setUserData(null);
    localStorage.removeItem('userToken');
    navigate('/login');
    // console.log('logout called');
  }
  function SaveUserData() {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
    console.log(decodedToken);
  }
  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      SaveUserData();
    }
  }, [])

  // function ProtectedRoute(props) {
  const navigate = useNavigate();
  //   if (localStorage.getItem('userToken') === null) {
  //      <Navigate to="/login" />
  //      return <></>
  //      // return <Navigate to="/login" replace={true} />
  //     // return <Login/>
  //     // return navigate('/login')
  //     // return <redirect to="/login" />

  //   } else {
  //     return props.children
  //   }
  // }


  return (<>
    <Routes>

      <Route path="/" element={<Login SaveUserData={SaveUserData} />} />
      <Route path="/login" element={<Login SaveUserData={SaveUserData} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<><ProtectedRoute><Navbar logout={logout} /> <Home /></ProtectedRoute></>} />
      <Route path="/booking" element={<><ProtectedRoute><Navbar logout={logout} /> <Booking /></ProtectedRoute></>} />
      <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
      <Route path="/print" element={<><ProtectedRoute><Navbar logout={logout} /> <Print /></ProtectedRoute></>} />
      <Route path="/*" element={<> <NotFound /></>} />
      {/* <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<><Navbar logout={logout} /> <Home /></>} />
        <Route path="/booking" element={<><Navbar logout={logout} /> <Booking /></>} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/print" element={<><Navbar logout={logout} /> <Print /></>} />
      </Route> */}

    </Routes>


    {/* <Route path="/" element={<ProtectedRoute><Navbar /> <Home /></ProtectedRoute>} /> */}
    {/* <Route path="/home" element={<ProtectedRoute><Navbar /> <Home /></ProtectedRoute>} /> */}
    {/* <Route path="/login" element={<ProtectedRoute><Login SaveUserData={SaveUserData} /></ProtectedRoute>} /> */}
    {/* <Route path="/register" element={<ProtectedRoute><Register /></ProtectedRoute>} /> */}
    {/* <Route path="/booking" element={<ProtectedRoute> <Booking /></ProtectedRoute>} /> */}
    {/* <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} /> */}
    {/* <Route path="/print" element={<ProtectedRoute><Print /></ProtectedRoute>} /> */}

  </>
    // <div>
    //   <RouterProvider router={router} />
    // </div>
  );
};

export default App;
