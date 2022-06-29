import React from 'react'
import './Navbar.css'
import navbar from "../../images/Navbar/logo.jpg"
function Navbar() {
    return (
        <div className='navbar_container'>
            <img className='navbar_image' src={navbar} alt="logo" />
            <button className='navbar_button'>Sign In</button>
        </div>
    )
}

export default Navbar
