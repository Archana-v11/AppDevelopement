import React from 'react'
import './Home.css';


import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import Sidebar from '../Bar/Sidebar';

export default function Home() 
{
  
  return (
    
    <div>
  
    
    <Sidebar/>
    <section className='homefull'>
    
  
    <div className='title1'>
    
    <h1 className='home_h1'>Adventure awaits here</h1><br/>
    {/*<h2 className='home_h2'>Connecting People with wildlife</h2>*/}
    </div>
    </section>
    <section className='homeimage'>
    <div className='imagecon'>
        <div className='card'>
            <div className='imgBx'>
               <a href='/lion'>
               <img src='https://i.pinimg.com/564x/79/57/78/7957789b013ede8048060df55f7fced8.jpg'/>
               </a>
               <h2>Lion</h2>
               <p><br/>The lion is a majestic big cat native to Africa, known for its distinctive mane in males. These are typically form social groups called prides, consisting of lionesses, their young, and a few dominant males.</p>
              </div>     
          </div>

          <div className='card'>
            <div className='imgBx'>
               <a href='/elephant'>
               <img src='https://i.pinimg.com/564x/d1/b8/0e/d1b80e5627b04f16bd8343142329061d.jpg'/>
               </a>
               <h2>Elephant</h2>
               <p><br/>The elephant is the largest land animal on Earth, known for its massive size, distinct trunk, and large, floppy ears. These gentle giants are highly social, living in close-knit family groups led by a matriarch. </p>
              </div>     
          </div>

          <div className='card'>
            <div className='imgBx'>
               <a href='/cheetah'>
               <img src='https://i.pinimg.com/236x/fd/48/e7/fd48e7d1008d3322ddafa382f187fe09.jpg'/>
               </a>
               <h2>Cheetah</h2>
               <p><br/>The cheetah is a remarkable large cat renowned for its incredible speed, being the fastest land animal on Earth, capable of reaching speeds up to 60-70 miles per hour .</p>
              </div>     
          </div>

          
    </div>

    
    
    
    
    
    </section>
    
   
   <footer>
        <div className='footer-content'>
            <h4>Projects</h4>
            <li><a href='/places'>Places</a></li>
            <li><a href='/animals'>Animals</a></li>
            <li><a href='/images'>Images</a></li>
            <li><a href='/videos'>Videos</a></li>
        </div>
        <div className='footer-content'>
            <h4>Quick Links</h4>
            <li><a href='/faq'>FAQ</a></li>
            <li><a href='/privacy'>Privacy Policy</a></li>
            <li><a href='/contact'>Help</a></li>
            <li><a href='/terms'>Terms & Conditions</a></li>
        </div>
        <div className='footer-content'>
            <h4>Company</h4>
            <li><a href='/about'>About Us</a></li>
            <li><a href='/contact'>Contact Us</a></li>
        </div>
        <div className='footer-content'>
          <h4>Follow Us</h4>
          <div className='sociallink'>
          <a href='https://www.facebook.com/profile.php?id=100091308641475'><span className='sicon'><AiIcons.AiFillFacebook/></span></a>
          <Link to='https://www.instagram.com/archana.v11/'><span className='sicon'><BsIcons.BsInstagram/></span></Link>
          <Link to='https://www.linkedin.com/in/archana-v-456278227/'><span className='sicon'><AiIcons.AiOutlineLinkedin/></span></Link>
          <Link to='https://twitter.com/'><span className='sicon'><BsIcons.BsTwitter/></span></Link>
          <Link to='https://www.youtube.com/'><span className='sicon'><BsIcons.BsYoutube/></span></Link>
          </div>
          </div>
  </footer>
   <div className='copyright'>
      <p>Copright 2023 Online Tutorials.All rights reserved</p>
   </div>
    </div>
    );
  }  
  