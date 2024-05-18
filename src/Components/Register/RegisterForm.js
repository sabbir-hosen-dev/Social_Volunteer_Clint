import React, { useState } from 'react'
import "./RegisterForm.css"
import useAppContex from '../../Hook/useContext'
import { useNavigate } from 'react-router-dom';

function RegisterForm() {

  const {user,selectItem} = useAppContex();
  const navigate =  useNavigate();

  const [formData,setFormData] = useState({
    name:user.name,
    date:"",
    desc:"",
    title:selectItem.title,
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
     setFormData({
      ...formData,[name] : value
     })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const volunteerImg = selectItem.img
    const data ={...formData,...user,volunteerImg}
    fetch("https://social-volunteer-server.onrender.com/addData",{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res =>{
      navigate("/profile")
    })
    .catch(err => console.log(err))
  }

  return (
    <form action="" className='register-form' onSubmit={handleSubmit}>
      <h4>Register as a Volunteer</h4>
        <div className="input-wrap">
          <input type="text" name="name" id="name" required onChange={handleChange} value={formData.name} />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-wrap">
          <input type="text" name="title" id="title" value={formData.title} required onChange={handleChange} />
          <label htmlFor="title">Title</label>
        </div>
        <div className="input-wrap">
          <input type="date" name="date" id="date" required onChange={handleChange} />
          <label htmlFor="desc" className='date'>Date</label>
        </div>
        <div className="input-wrap">
          <textarea type="tex" name="desc" id="desc" required onChange={handleChange} />
          
          <label htmlFor="desc">Desicription</label>
        </div>
        <div className="button-wrap">
          <button className="btn">Registration</button>
        </div>
    </form>
  )
}

export default RegisterForm
