import { BiPlus } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllEvent from "../Components/AllEvent/AllEvent";
import AddEvent from "../Components/AddEvent/AddEvent";

function Admin() {
  const [click, setClick] = useState(true);

  return (
    <div className="admin-wrap">
      <div className="sidebr">
        <Link to="/" className="logo">
          <img src={require("../Assist/Images/logo.png")} alt="" />
        </Link>
        <ul>
          <li
            onClick={() => setClick(true)}
            style={{ color: click ? "#207FEE" : "" }}
          >
            <FaUserFriends /> Volunteer register list
          </li>
          <li onClick={() => setClick(false)}
          style={{ color: !click ? "#207FEE" : "" }}
          >
            <BiPlus /> Add Event
          </li>
        </ul>
      </div>

      <div className="content">
        <div className="admin-header">
          <h1>{click ? "Volunteer register list" : "Add Event"}</h1>
        </div>
        <div className="table-wrap">{click ? <AllEvent /> : <AddEvent />}</div>
      </div>
    </div>
  );
}

export default Admin;
