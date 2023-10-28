import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import "./css/styles.css"
import { useState } from "react";
import {Routes,Route,Link} from "react-router-dom"
const App=()=>{
  const [showRegister, setShowRegister] = useState(null);
  
  return(
    <div className="container1">
    <ul className="nav-links">
      <li>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </ul>
  </div>
  )
}

export default App;