import { CgClose } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import React, { useState } from "react";
import "./Navber.css";
import { Link } from "react-router-dom";
import useAppContex from './../../Hook/useContext';
const logo = require("../../Assist/Images/logo.png");

function Navber() {
  const [menu, setmenu] = useState(false);
  const [active, setActive] = useState(false);
  const {login,user} = useAppContex()

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <nav className={active ? "active" : " "}>
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <ul className={menu ? "hide" : ""}>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link">Donation</Link>
        <Link className="link">Events </Link>
        <Link className="link">Blog</Link>
        <Link to="/admin" className="link btn admin">
          Admin
        </Link>
        {login ? (
        <Link to="/profile"><img src={user.photo} alt="user" className="profilePhoto"  title={`${user.name} \n${user.email}`} /></Link>
      ) : (
        <Link to="/profile" className="btn">Profile</Link>
      )}
      </ul>
      {menu ? (
        <BiMenuAltRight className="menu" onClick={() => setmenu(!menu)} />
      ) : (
        <CgClose className="menu close" onClick={() => setmenu(!menu)} />
      )}
    </nav>
  );
}

export default Navber;
