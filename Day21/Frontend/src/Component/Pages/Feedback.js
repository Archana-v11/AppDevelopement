import React, { useState } from 'react'
import "./Feedback.css";
import Sidebar from '../Bar/Sidebar';
import {  useNavigate } from 'react-router-dom';
import axios from'axios';
export default function Feedback() 
{
  const[aboutus,setAboutus]=useState('');
  const[tour,setTour]=useState('');
  const[better,setBetter]=useState('');
  const[communication,setCommunication]=useState('');

  const details={aboutus,tour,better,communication};
  const navigate=useNavigate();

  const formHolder=async(e)=>{
    e.preventDefault();
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.token}`;
    axios.post("http://localhost:8080/auth/postfeedback",details)
    navigate("/home");
  }
  return (
    <div>
    
       <div class="bgimg">
       <Sidebar/>
       <img src="https://wallpapers.com/images/hd/wild-animals-background-8nzaktwqhkpx93qb.jpg"  height="860px" width="1536px"></img>
       </div>

       <div class="rectangle666"></div>
       <div class="head666">
       <p><b>FEED BACK</b></p>
       </div>
       
       

       <div class="form666">
        <form onSubmit={formHolder}>
              <lable for="name">1.Where did you hear about us? </lable>
              <br/>
              <br/>
              <input type="text6666" value={aboutus} onChange={(e)=>setAboutus(e.target.value)}/>
              <br/>
              <br/>
              <label for="sas">2.How happy are you with the tour?</label>
              <br/>
              <input type="text6666" value={tour} onChange={(e)=>setTour(e.target.value)}/>
              <br/>
              <br/>
              <lable for="better">3.How can we make this better?</lable>
              <br/>
              <br/>
              <input type="text6666" value={better} onChange={(e)=>setBetter(e.target.value)}/>
              <br/>
              <br/>
              <label for="rate">4.How well did we communicate</label>
              <br/>
              <input type="text6666" value={communication} onChange={(e)=>setCommunication(e.target.value)}/>
              <br/>
              <br/>
              <div class="but666">
              <button class="abi666" type="submit">SUBMIT</button>
              </div>
              </form>
              
       </div>

    </div>
  )
}