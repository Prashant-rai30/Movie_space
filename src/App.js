import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./container/LandingPage"
import './App.css';
import SignIn from "./container/SignIn/SignIn"

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
  const isUserLoggedIn = false;
  return (
    <BrowserRouter>
      <div className='App' >
        <Routes>
          {/* route gives 2 thngs path and element and is 2 step process */}
          <Route path='/' element={isUserLoggedIn ? " " : <LandingPage />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>

      </div>
    </BrowserRouter>

  );
}

export default App;
