import React, { useState } from "react";
import {Link,useNavigate} from "react-router-dom"
import "../css/styles.css"
const Register=()=>{
    const navigate=useNavigate();
    // const [formData,setFormdata]=useState({
    //     firstName:"",
    //     lastName:"",
    //     dob:""
    // });

    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [dobError, setDobError] = useState("");
  const [specialityError, setSpecialityError] = useState("");
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    
        
    //     setFormdata((previousFormData) => {
    //         return {
    //             ...previousFormData,
    //             [name]: value
    //         }
    //     });
    //     console.log(formData);
    // }

    const handleBlur=(e)=>{
        const {name,value}=e.target;
        if(name==="firstName"){
            if(value===""){
                setFirstNameError("First name shouldn't be empty")
            }
            else {
                setFirstNameError("");
            }
        }
        else if(name==="lastName"){
            if(value===""){
                setLastNameError("Last name shouldn't be empty")
            }
            else {
                setLastNameError("");
            }
        }
        else if(name==="dob"){
            const birthDate = new Date(value);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            if(value===""){
                setDobError("Dob shouldn't be empty")
            }
           else if (age < 22) {
                setDobError("Age must be greater than 22");
              }
            else {
                setDobError("");
            }
        }
    }
    const handleRegister=(e)=>{
        if(firstNameError!==""){
            alert("please give proper first name")
        }
        else if(lastNameError!==""){
            alert("please give proper last name")
        }
        else if(dobError!==""){
            alert("please give proper dob, your age should be greater than 22 years")
        }
        else{
            alert("user registered");
            navigate("/");
        }
        
    }
    return(
        <div className="container">
        <h2>Patient Information</h2>
        <form name="myForm" id="customerForm">
            <div className="form-group">
                <label for="firstName">First Name:*</label>
                <input onBlur={handleBlur} onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="Enter Your First Name" type="text" id="firstName" name="firstName" />
            </div>
            <p style={{color:"red"}} value={firstNameError} id="firstNamePara">{firstNameError}</p>
            
            <div className="form-group">
                <label for="lastName">Last Name:*</label>
                <input onBlur={handleBlur} onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder="Enter Your Last Name" type="text" id="lastName" name="lastName"  />
                <p id="lNamePara" ></p>
            </div>
            <p style={{color:"red"}} id="lastNamePara">{lastNameError}</p>
            <div className="form-group">
            <label for="dob">Date of Birth:</label>
        <input onBlur={handleBlur} onChange={(e) => setDob(e.target.value)} value={dob} type="date" id="dob" name="dob" /><br />
            </div>
            <p id="dobPara">{dobError}</p>
            <div className="form-group">
                <label for="identityProof">Speciality of medicine*</label>
                <select id="identityProof" name="identityProof">
                    <option selected>Select medicine type</option>
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>Gastroenterology</option>
                    <option>Orthopedics</option>
                </select>
            </div>
            <p style={{color:"red"}} value={dobError}>{dobError}</p>
            <button onClick={handleRegister} className="btn" type="submit" id="nextbtn">REGISTER</button>

            Already have account?. Click below to login
        <Link to="/login">Login</Link>
        </form>
       
    </div>
    )
    
}

export default Register;