import React,{useState} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import "./Employee.css";


export default function Employee() {
  const [errors,seterror]=useState({});
  const Navigate=useNavigate();
  const [formData,setformData]=useState({firstName:"",lastName:"",dob:"",mobileno:"",Email:""});
  


const validate=()=>{
  const newErrors = {};
     const namePattern = /^[A-Za-z\s]+$/;
    const mobilePattern = /^[6789]\d{9}$/;
    const emailPattern = /^[a-z0-9._%+-]+@gmail\.com$/;

  if(!formData.firstName){
      newErrors.firstName="first name is required";
  }else if(!namePattern.test(formData.firstName)){
    newErrors.firstName = 'First name can only contain alphabets';
  }
if (!formData.lastName){
  newErrors.lastName="last Name is required";
}else if(!namePattern.test(formData.lastName)){
  newErrors.lastName="No special characters are allowed";
}

if(!formData.dob){
  newErrors.dob="Date of Birth is required";
}

if(!formData.mobileno){
  newErrors.mobileno="mobile no is Required";
}else if(!mobilePattern.test(formData.mobileno)){
  newErrors.mobileno="No alphabets and special characters are allowed"
}
if(!formData.Email){
  newErrors.Email="Email is required";
}else if(!emailPattern.test(formData.Email)){
  newErrors.Email="Invalid Email";
}

 return newErrors;
}

const handleChange=(e)=>{
  const {name,value}=e.target;
  setformData({
    ...formData,
    [name]:value,
  })
}


const handleSubmit=async(e)=>{
  e.preventDefault();
  const validationerrors=validate();
  seterror(validationerrors);
  if(Object.keys(validationerrors).length === 0){
  Navigate("/2", {state:{formData}});
}
};


  return (
    <>
    <div className="back">
    <h1 className="text2">COGNISOFT TECHNOLOGIES</h1>
    <div className='container-fluid sp-background'>
    <div className="row">
    <div className='d-flex flex-column justify-content-center'>
    <form  className="form-space" onSubmit={handleSubmit}>
    <div className="mb-10">
    <h1>Registration Form</h1>
    <label htmlFor="fullName">Full Name:*</label><br/>
      <input type="text" placeholder="Enter your First Name" id="fullName" name="firstName" value={formData.firstName}  onChange={handleChange}
        className={errors.firstName ?"input-error":""}
      />
      {errors.firstName && <p className="sp-error">{errors.firstName}</p>}
      <input type="text" placeholder="Enter your last name" id="fullName" name="lastName" value={formData.lastName}  onChange={handleChange}
      className={errors.lastName?"input-error":""}
      /><br/>
      
      {errors.lastName && <p className="sp-error">{errors.lastName}</p>}
      <label htmlFor="dob">Date of Birth:*</label><br/>
      <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange}
        className={errors.dob?"input-error":""}
      /><br/>
      {errors.dob && <p className="sp-error">{errors.dob}</p>}
      <label htmlFor="number">Phone Number:*</label><br/>
      <input type="text" name="mobileno" id="number" value={formData.mobileno}  onChange={handleChange}
        className={errors.mobileno?"input-error":""}
      /><br/>
      {errors.mobileno && <p className="sp-error">{errors.mobileno}</p>}
      <label htmlFor="Email">Email*:</label><br/>
      <input type="text" name="Email" id="Email" value={formData.Email} onChange={handleChange}
      className={errors.Email? "input-error":""}
       /><br/>
      {errors.Email && <p className="sp-error">{errors.Email}</p>}
      <button type="submit" className="btn btn-dark">submit</button>
      </div>
      </form>

    </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

