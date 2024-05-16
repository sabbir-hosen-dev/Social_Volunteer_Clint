import React, { useState } from 'react'
import "./RegisterForm.css"
import useAppContex from '../../Hook/useContext'

function RegisterForm(props) {
  console.log(props)
  const {user} = useAppContex();
  const [formData,setFormData] = useState({
    name:user.name,
    date:"",
    desc:"",
    title:"",
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
     setFormData({
      ...formData,[name] : value
     })
  }

  return (
    <form action="" className='register-form'>
      <h4>Register as a Volunteer</h4>
        <div className="input-wrap">
          <input type="text" name="name" id="name" required onChange={handleChange} value={formData.name} />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-wrap">
          <input type="date" name="date" id="date" required onChange={handleChange} />
          <label htmlFor="desc" className='date'>Date</label>
        </div>
        <div className="input-wrap">
          <input type="text" name="desc" id="desc" required onChange={handleChange} />
          <label htmlFor="desc">Desicription</label>
        </div>
        <div className="input-wrap">
          <input type="text" name="title" id="title" required onChange={handleChange} />
          <label htmlFor="title">Organize books at the library</label>
        </div>
        <div className="button-wrap">
          <button className="btn">Registration</button>
        </div>
    </form>
  )
}

export default RegisterForm
