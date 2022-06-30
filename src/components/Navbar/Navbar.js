import React from 'react'
import './Navbar.css'
import navbar from "../../images/Navbar/logo.png"
import { useNavigate } from "react-router-dom"
function Navbar({ showSignInButton }) {
    const navigate = useNavigate() //given by react router dom to navigate and change url

    function goToSignInPage(showSignInButton) {
        navigate("/sign-in") //same as useNavigate

    }

    return (
        <div className='navbar_container'>
            <img className='navbar_image' src={navbar} alt="logo" />
            {showSignInButton === false ? " " : <button className='navbar_button' onClick={goToSignInPage}>Sign In</button>}
        </div>
    )
}

export default Navbar;
