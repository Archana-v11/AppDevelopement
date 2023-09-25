import React from 'react'
import './Feedback.css';
import Sidebar from '../Bar/Sidebar';

export default function 
() {
  return (
    <div>
    <Sidebar/>
    <div className='feedback_full'>
    <div className='feedback_container'>
       <h1>Give us your valuable feedback</h1>
       <p>Your feedback is very important to us</p>
       <div className='emoji-box'>
           <button className='btn-normal'>&#128578;</button>
           <button className='btn-normal'>&#128515;</button>
           <button className='btn-normal'>&#128519;</button>
           <button className='btn-normal'>&#128531;</button>
           <button className='btn-normal'>&#128532;</button>
           <button className='btn-normal'>&#128545;</button>
       </div>
       <p className='question'>How can we improve our website?</p>
       <textarea id="feedback_textarea" cols="20" rows="5"></textarea>
       <p className='question'>Satisfied with our website?</p>
        <div className='feedback_radio'>
           <div className='one-btn'>
               <input type='radio' name='one' id='yes'/>
               <label for="yes">Yes</label>
           </div>
           <div className='one-btn'>
               <input type='radio' name='one' id='no'/>
               <label for="no">No</label>
           </div>
        </div>
        <div className='info-field'>
            <div className='name'>
               <label>
                  <input type='text' placeholder='Name'/>
                  
               </label>
            </div>
            <div className='email'>
               <label>
                  <input type='text' placeholder='Email Address'/>
                  
               </label>
            </div>
        </div>
        <div className='accept'>
             <input type='radio' id='accept'/>
             <label>I accept the <a href="#">terms and conditions</a></label>
        </div>
        <div className='feedback_button'>
        <input type='submit' value="Send"/>
        </div>
    </div>

    </div>
    </div>
  )
}
