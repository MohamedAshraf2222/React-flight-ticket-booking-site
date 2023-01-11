import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export let logout =createContext(0);
const [userData, setUserData] = useState(null)

const navigate = useNavigate();
function logout() {
    setUserData(null);
    localStorage.removeItem('userToken');
    navigate('/login');
    // console.log('logout called');
  }

function logout(props) {
    return <logout.provider val>

    </logout.provider>
}