import React from 'react'
import LocalMallIcon  from '@mui/icons-material/LocalMall';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useNavigate } from "react-router-dom"
export default function NavBar() {

    const navigate = useNavigate();
  return (
        <div className='flex justify-between ' >
            <div className= 'flex justify-between' onClick={()=> navigate("/")}>
                <h1>Product Store</h1>
                <LocalMallIcon/>
            </div>
            <ul className = " flex gap-3">
                <li onClick={()=> navigate("/create")}><AddBusinessIcon/> </li>
                <li><LightModeIcon/> </li>
            </ul>
            
        </div>
  )
}
