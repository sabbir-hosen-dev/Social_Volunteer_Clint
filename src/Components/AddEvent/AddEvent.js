import React, { useState } from "react";
import "./AddEvent.css";

function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    desc: "",
    banner: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
      setFormData({...formData,[name]:value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5001/postEvent",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res=> res.json())
    .then(data => {
      
    })
    .catch(err => console.log(err))
    
  }
  return (
    <div className="addEvent">
      <form action="" onSubmit={handleSubmit}>
        <div className="input-div">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="name"
            required
            placeholder="Input Title"
            onChange={(handleChange)}
          />
        </div>
        <div className="input-div">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" required
          onChange={(handleChange)} />
        </div>
        <div className="input-div">
          <label htmlFor="desc">Description</label>
          <textarea
            name="desc"
            id="desc"
            required
            placeholder="Input Description"
            onChange={(handleChange)}
          ></textarea>
        </div>
        <div className="input-div">
          <label htmlFor="banner">Banner</label>
          <input
            type="file"
            name="banner"
            id="img"
            required
            placeholder="Iinput Banner image"
            onChange={(handleChange)}
          />
        </div>
        <button type="submit" className="btn submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEvent;
