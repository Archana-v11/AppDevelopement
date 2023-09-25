import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import Sidebar from '../Bar/Sidebar';

export default function Signup() {
    const[firstname,setFirstName]=useState('');
    const[lastname,setLastName]=useState('');
    const[mobileNum,setMobileNum]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPwd,setConfirmPassword]=useState('');
    const[error,seterror]=useState(false);
    const navigate=useNavigate();

    const formHandler=(event)=>
    {
        event.preventDefault();
        if(firstname.length===0 || lastname.length===0 || mobileNum.length<10 || mobileNum.length>10 || email.length===0 ||  password.length!==0 || password!==confirmPwd)
        {
          seterror(true);
          
        }
        else{
          navigate("/login")
        }
      }
      return (
        <div>
        <div className='full2'>
        <Sidebar/>
    <div className='rectangle2'></div>
    
    <h4><form className="form_signup" onSubmit={formHandler}>
    <br/>
    <h2>CREATE ACCOUNT</h2><br/>
    FIRST NAME: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={firstname} placeholder="first name" onChange={e=>setFirstName(e.target.value)}/><br/>
    <div>
    {error && firstname.length===0?
      <label style={{color:'red'}}>Firstname is required</label>:""} 
      </div><br/>
      LAST NAME: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={lastname} placeholder="last name" onChange={e=>setLastName(e.target.value)}/><br/>
      <div>
      {error && lastname.length===0?
      <label style={{color:'red'}}>Lastname is required</label>:""} 
      </div><br/>
      MOBILE NUMBER:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><input type="text" value={mobileNum} placeholder="mobile number" onChange={e=>setMobileNum(e.target.value)}/><br/>
    <div>
    {error && mobileNum.length<10?
      <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
      </div>
      <div>
      {error && mobileNum.length>10?
        <label style={{color:'red'}}>Invalid Mobile Number</label>:""} 
        </div><br/>
        E-MAIL ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" value={email} placeholder="email id" onChange={e=>setEmail(e.target.value)}/><br/>
        <div>
        {error && email.length===0?
          <label style={{color:'red'}}>E-mail ID is required</label>:""} 
          </div><br/>
          
          PASSWORD:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" value={password} placeholder="password" onChange={e=>setPassword(e.target.value)}/><br/>
    <div>
    {error && password.length===0?
      <label style={{color:'red'}}>Password is required</label>:""}
      </div><br/>
      CONFIRM PASSWORD:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><input type="password" value={confirmPwd} placeholder="confirm password" onChange={e=>setConfirmPassword(e.target.value)}/><br/>
      <div>
      {error && password!==confirmPwd?
        <label style={{color:'red'}}>Password Confirmation Failed</label>:""}
        </div>
        <div>
        <br/><br/>
        <button type="submit" class="but3" >SUBMIT</button><br/>
        </div>
        <br/><br/><br/><br/>
        </form></h4>
        </div>
        </div>
        )
      }
      /*const handleSubmitButtonClick = () => {
        navigate('/');
        onClick={handleSubmitButtonClick}
      };*/