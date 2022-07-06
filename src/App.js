import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./container/LandingPage/LandingPage"
import './App.css';
import SignInPage from "./container/SignInPage/SignInPage"
import HomePage from "../src/container/HomePage/HomePage"
import { useState } from "react";
//Ternary operator 
//normal operator
//if else statement
//if(true){
//console.log("working fine")}
//else
//console.log("notworking")
//Ternary operator 
//a==10?(console.log("working"):(console.log("not-working")


function App() {
  const [user, setUser] = useState(true)
  return (
    <BrowserRouter>
      <div className='App' >
        <Routes>
          {/* route gives 2 thngs path and element and is 2 step process */}

          <Route path="/" element={user ? <HomePage /> : <LandingPage />} />
          <Route path="/signin-signup" element={<SignInPage />} />
        </Routes>


      </div>
    </BrowserRouter>

  );
}

export default App;
