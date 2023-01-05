import React from 'react'
import './sidebar.css'
import Logo from './logo.jpg'

const SideBar = () => {
  return (
    <div className="sidebar">
        <img className='logo' src={Logo}></img>
        <ul>
          <li><i class="fa-solid fa-building-columns"></i> Universities</li>
          <li><i class="fa-solid fa-graduation-cap"></i> Admissions</li>
        </ul>
      </div>
  )
}

export default SideBar