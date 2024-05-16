
import { Navigate, useLocation } from 'react-router-dom'
import useAppContex from '../Hook/useContext'

function ProctedROute({children}) {
  const {login} = useAppContex()
  const location = useLocation();


  if(login){
    return children
  }else{
    return  <Navigate to="/login" replace state={{form : location.pathname}} />
  }
}

export default ProctedROute
