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
          <a href='https://www.facebook.com/'><span className='sicon'><AiIcons.AiFillFacebook/></span></a>
          <Link to='https://www.instagram.com/'><span className='sicon'><BsIcons.BsInstagram/></span></Link>
          <Link to='https://www.linkedin.com/'><span className='sicon'><AiIcons.AiOutlineLinkedin/></span></Link>
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
  