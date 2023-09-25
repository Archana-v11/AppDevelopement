import React from 'react'
import './FAQ.css';
import Sidebar from '../Bar/Sidebar';
export default function FAQ() {
  return (
    <div>
    <Sidebar/>
    <div className='faq_full'>
    <div className='container'>
        <h1>Frequently Asked Question!!</h1>
        <div className='tab'>
           <input type='radio' name='acc' id='acc1'></input>
           <label for='acc1'>
               <h2>01</h2>
               <h3>What is a wildlife watching tour?</h3>

           </label>
           <div className='content_faq'>
            <p>A wildlife watching tour is an organized excursion that allows participants to observe and learn about wildlife in their natural habitats. 
            It's an opportunity to connect with nature and witness animals in their native environments.</p>
           </div>
        </div>

        <div className='tab'>
           <input type='radio' name='acc' id='acc2'></input>
           <label for='acc2'>
               <h2>02</h2>
               <h3>How does it work?</h3>

           </label>
           <div className='content_faq'>
            <p>Our website provides live camera feeds, recorded videos, and other 
            multimedia content from various wildlife reserves and natural habitats.
             Users can access these resources to watch animals and learn about their behavior.</p>
           </div>
        </div>

        <div className='tab'>
           <input type='radio' name='acc' id='acc3'></input>
           <label for='acc3'>
               <h2>03</h2>
               <h3>Can I interact with the animals during the online Tutorials?</h3>

           </label>
           <div className='content_faq'>
            <p>No, our online tours are designed for observation and educational purposes only.
            Interacting with wild animals in their natural habitat is neither safe nor ethical.</p>
           </div>
        </div>

        <div className='tab'>
           <input type='radio' name='acc' id='acc4'></input>
           <label for='acc4'>
               <h2>04</h2>
               <h3>Is there a fee for accessing the online wildlife tours?</h3>

           </label>
           <div className='content_faq'>
            <p>Some tours may be free, while others may require a subscription or one-time payment. 
            The pricing details can be found on the tour's respective page.</p>
           </div>
        </div>

        <div className='tab'>
           <input type='radio' name='acc' id='acc5'></input>
           <label for='acc5'>
               <h2>05</h2>
               <h3>Can I watch the tours with my family and friends?</h3>

           </label>
           <div className='content_faq'>
            <p>Absolutely! Our online wildlife tours are a
            great way to share the experience with family and friends. 
           You can watch together and discuss what you see.</p>
           </div>
        </div>
    </div>
    </div>
    </div>
  )
}










/*import React from 'react'
import './FAQ.css';
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
export default function FAQ() {
  return (
    <div>
       <div className='wrapper'>
           <h1>Frequently Asked Questions:</h1>

           <div className='faq'>
               <button className='accordion'>
               What is a wildlife watching tour?
               
               <span className='faq_icons'><AiIcons.AiOutlinePlus/></span>
               </button>
               <div className='pannel'>
                  <p>A wildlife watching tour is an organized excursion that allows participants to observe and learn about wildlife in their natural habitats. 
                  It's an opportunity to connect with nature and witness animals in their native environments.</p>
               </div>
           </div>

           <div className='faq'>
               <button className='accordion'>
               How does it work?
               
               <span className='faq_icons'><AiIcons.AiOutlinePlus/></span>
               </button>
               <div className='pannel'>
                  <p>Our website provides live camera feeds, recorded videos, and other 
                  multimedia content from various wildlife reserves and natural habitats.
                   Users can access these resources to watch animals and learn about their behavior.</p>
               </div>
           </div>
           <div className='faq'>
               <button className="accordion">
               Can I interact with the animals during the online Tutorials?
               
               <span className='faq_icons'><AiIcons.AiOutlinePlus/></span>
               </button>
               <div className='pannel'>
                  <p>No, our online tours are designed for observation and educational purposes only.
                  Interacting with wild animals in their natural habitat is neither safe nor ethical.</p>
               </div>
           </div>
           <div className='faq'>
               <button className='accordion'>
               Is there a fee for accessing the online wildlife tours?
               
               <span className='faq_icons'><AiIcons.AiOutlinePlus/></span>
               </button>
               <div className='pannel'>
                  <p> Some tours may be free, while others may require a subscription or one-time payment. 
                  The pricing details can be found on the tour's respective page.</p>
               </div>
           </div>
           <div className='faq'>
               <button className='accordion'>
               Can I watch the tours with my family and friends?
               
               <span className='faq_icons'><AiIcons.AiOutlinePlus/></span>
               </button>
               <div className='pannel'>
                  <p>Absolutely! Our online wildlife tours are a
                  great way to share the experience with family and friends. 
                 You can watch together and discuss what you see.</p>
               </div>
           </div>
       </div>
       
       </div>
       )
    }
    
    /*<script>
    var accordions = document.getElementsByClassName("accordion");

    for (var accordion of accordions) {
        accordion.addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
    
            if (panel.style.display === "block" || panel.style.display === "") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        })
    }
    
     
         
 </script>*/