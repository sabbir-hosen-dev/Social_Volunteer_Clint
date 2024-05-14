import React from "react";
import "./HomeTop.css";

function HomeTop() {
  return (
    <div className="home-top">
      <h2>I grow by helping people in need.</h2>
      <div className="serch-wrap">
        <input
          type="search"
          name="serch"
          id="serch"
          className="input-serch"
          placeholder="Search"
          required
        />
        <button className="btn serch-btn">Search</button>
      </div>
    </div>
  );
}

export default HomeTop;
