/* eslint-disable jsx-a11y/anchor-is-valid */
import { FcGoogle } from "react-icons/fc";
import React from "react";
import "./LoginForm.css";
import { useLocation, useNavigate } from "react-router-dom";
import useAppContex from "../../Hook/useContext";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../Firebase/Fire";

function LolginForm({item}) {

  const {setLogin,setUser} = useAppContex()
  const location = useLocation();
  const navigate = useNavigate()

  const handleLogin = () => {
    signInWithPopup(auth,googleProvider)
    .then(data => {
      const {displayName,email,photoURL} = data.user
      setUser({
        name: displayName,
        email:email,
        photo: photoURL
      })
      setLogin(true);
      navigate(location.state.form)
    })
  };
  return (
    <div className="login-form">
      <h3>Login With</h3>
      <button onClick={handleLogin}>
        <FcGoogle className="google" /> Sign in with Google
      </button>
      <p>
        Don’t have an account? <a>Create an account</a>
      </p>
    </div>
  );
}

export default LolginForm;
