import React from 'react'
import PageNav from '../Components/PageNave/PageNav'
import LolginForm from '../Components/Login/LolginForm'
import { useLocation } from 'react-router-dom';

function Login() {
  const location = useLocation();
  return (
    <div className='login'>
      <PageNav />
      <LolginForm item={location.item} />
    </div>
  )
}

export default Login
