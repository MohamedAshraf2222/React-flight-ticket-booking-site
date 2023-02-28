import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/Store";

function Login() {
  const { SaveUserData } = useContext(AuthContext);

  const signIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, pwd);
      const user = response.user.accessToken;
      localStorage.setItem("userToken", user);
      SaveUserData();
      setIsLoading(false);
      navigate("/home");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        {isLoading ? (
          <div className="text-center text-3xl text-white m-40">
            Loading ...
          </div>
        ) : (
        //   <React.Suspense fallback="loading...">
            <div className="flex bg-btn-feedback rounded-lg flex-col items-center justify-center">
              <div className="text-3xl py-12 text-white font-semibold">
                Login
              </div>
              <form className="flex flex-col px-14 pb-10" onSubmit={signIn}>
                <label className="text-white text-lg mb-2 mt-5" htmlFor="name">
                  Email :
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  required
                  placeholder="Enter Your Email"
                  className="px-2 py-1 w-96 rounded-sm"
                />
                <label className="mt-8 text-white text-lg mb-2" htmlFor="name">
                  Password :
                </label>
                <input
                  onChange={(e) => setPwd(e.target.value)}
                  type="password"
                  required
                  placeholder="Enter Your Password"
                  className="px-2 py-1 w-96 rounded-sm"
                />
                <button
                  type="submit"
                  className={
                    "mt-10 w-full btn-login px-5 py-2 text-lg font-semibold rounded-lg text-white"
                  }
                >
                  Login
                </button>

                <Link to={"/register"} className="mt-4 mb-10">
                  <p className="text-white hover-color">
                    Doesn't Have Account ?
                  </p>
                </Link>
              </form>
            </div>
        //   </React.Suspense>
        )}
      </div>
    </>
  );
}

export default Login;
