import React from "react";
import img from "../../images/favicon/img.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Button from "../../global/Button/Button";

function Navbar({ showSignInButton, showInput }) {
  const navigate = useNavigate();

  function redirectTo(path) {
    navigate(path);
  }

  return (
    <div className="navbar_container">
      <img src={img} alt="logo" onClick={() => redirectTo("/")} />
      {showSignInButton === false ? (
        ""
      ) : (
          <Button text="Sign In" onClicking={() => redirectTo("/signin-signup")} />
      )}
      {showInput && <div className="navbar_inputfield"><input placeholder="Search movies" /></div> }
    </div>
  );
}

export default Navbar;