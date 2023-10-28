import React from "react";
import {Link,useNavigate} from "react-router-dom"
import { useState } from "react";
import "../css/styles.css"
const Login=()=>{
    const navigate=useNavigate();
    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState("");
 
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const handleBlur=(e)=>{
        const {name,value}=e.target;
        if(name==="userName"){
            if(userName===""){
                setUserNameError("User name shouldn't be empty")
            }
            else {
                setUserNameError("");
            }
        }
        else if(name==="pwd"){
            if(password===""){
                setPasswordError("Password shouldn't be empty")
            }
            else {
                setPasswordError("");
            }
        }
        
    }
    const handleLogin=(e)=>{
        const usn="kshitiz"
        const pass="ksh20"
        if(userNameError!==""){
            alert("please give correct user name")
        }
        else if(passwordError!==""){
            alert("please give correct password")
        }
        else if(userName!==usn){
            alert("Username is not valid")
        }
        else if(password!==pass){
            alert("password is incorrect")
        }
        else{
            alert("You are logged in");
            navigate("/");
        }
    }
    return(
        <div className="container">
      
        <form name="myForm" id="customerForm">
            <div className="form-group">
                <label for="firstName">User Name:*</label>
                <input onBlur={handleBlur} onChange={(e) => setUserName(e.target.value)} value={userName} placeholder="Enter Your Username" type="text" id="userName" name="userName" />
            </div>
            <p value={userNameError} id="firstNamePara">{userNameError}</p>
            
            <div className="form-group">
                <label for="pwd">Password:*</label>
                <input onBlur={handleBlur} onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Enter password" type="password" id="pwd" name="pwd"  />
               
            </div>
            <p value={passwordError} id="pwdPara">{passwordError}</p>
           <button onClick={handleLogin} className="btn" type="submit" id="nextbtn">Login</button>
        </form>

        Not Registered. Please click below to register
        <Link to="/register">Register</Link>
    </div>
    )
}

export default Login;