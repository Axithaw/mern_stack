import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
export default function App() {
  return (
    <div>
        <NavBar/>
        <Outlet/>
    </div>
  )
}
