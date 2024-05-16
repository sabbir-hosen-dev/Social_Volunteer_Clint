import { CgClose } from "react-icons/cg";
import { BiMenuAltRight } from "react-icons/bi";
import React, { useState } from "react";
import "./Navber.css";
import { Link } from "react-router-dom";
const logo = require("../../Assist/Images/logo.png");

function Navber() {
  const [menu, setmenu] = useState(false);
  const [active, setActive] = useState(false);

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
      <img src={logo} className="logo" alt="logo" />
      <ul className={menu ? "hide" : ""}>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link">Donation</Link>
        <Link className="link">Events </Link>
        <Link className="link">Blog</Link>
        <button className="btn">Register</button>
        <button className="btn admin">Admin</button>
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
