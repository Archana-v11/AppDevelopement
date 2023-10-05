import React from 'react'
import './Contactus.css';
import Sidebar from '../Bar/Sidebar';

export default function Contactus() {
  return (
    <div>
    <Sidebar/>
    <div className='contactfull'>
       <form>
           <h1>Contact Us Form</h1>
           <input type="text" id="firstName" placeholder="First Name" required/>
           <input type="text" id="lastName" placeholder="Last Name" required/>
           <input type="email" id="email" placeholder="Email" required/>
           <input type="text" id="mobile" placeholder="Mobile Number" required/>
           <h4>Type Your Message Here...</h4>
           <textarea required></textarea>
           <input type="submit" value="Send" id="contact_button"/>
       </form>
    </div>
    </div>
  )
}
