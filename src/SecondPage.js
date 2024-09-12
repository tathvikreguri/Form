import React,{useState} from 'react';
import {useNavigate,useLocation} from 'react-router-dom';
import Employee from "./Employee.js";
import "./SeconPage.css";


function SecondPage(){
const location=useLocation();
const {formData}=location.state || {};  
 
return(
<div className="second">
<div><span className="second-text">Welcome! {formData.firstName} {formData.lastName} </span></div>
<p> you are successfully Registered. Please Login</p>
<button className="btn btn-success">Login</button>
</div>

    )
}

export default SecondPage;