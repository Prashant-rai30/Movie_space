import React from "react";
import "./Navbar.css";
import navbar from "../../images/Navbar/logo.png";
import user from "../../images/Navbar/user.png"
import { useNavigate } from "react-router-dom";
import Button from "../../global/Button/Button";

function Navbar({ showSignInButton, showInputField }) {
  const navigate = useNavigate();

  function goToSignInPage() {
    navigate("/sign-in");
  }

  return (
    <div className="navbar_container">
      <div className="left">
        <img className="navbar_logo" src={navbar} alt="logo" /></div>

      {showSignInButton === false ? (
        " "
      ) : (
        <Button text="Sign In" onClicking={goToSignInPage} />
      )}
      <div className="right">

        {showInputField ? <input style={{width:"250px"}} /> : ""}
         <img className="navbar_logo2" onClick={goToSignInPage} src={user} alt="user" /> 
      </div>

    </div>
  );
}

export default Navbar;