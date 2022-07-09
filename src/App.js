import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage";
import SignIn from "./container/SignIn/SignIn";
import HomePage from "./container/HomePage/HomePage";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
//from here doing true false will ake you to home and landing page
  console.log("isUserLoggedIn", isUserLoggedIn)
  // const isUserLoggedIn = true;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isUserLoggedIn ? <HomePage /> : <LandingPage />}
          />
          <Route path="/sign-in" element={<SignIn setIsUserLoggedIn={setIsUserLoggedIn} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
//Ternary operator 
//normal operator
//if else statement
//if(true){
//console.log("working fine")}
//else
//console.log("notworking")
//Ternary operator 
//a==10?(console.log("working"):(console.log("not-working")

