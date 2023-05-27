import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Nav'>
      <div className='title'>
        <h2>Shivam Kumar</h2>
      </div>
      <div className='menu'>
        <a href="./navbar.jsx">Home</a>
        <a href="./navbar.jsx">About</a>
        <a href="./navbar.jsx">Menu</a>
        <a href="./navbar.jsx">Order</a>
        <a href="./navbar.jsx">Contact</a>
      </div>
    </div>
  )
}

export default Navbar;
