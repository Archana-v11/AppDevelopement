import React from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as VscIcons from "react-icons/vsc";

import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';

export default function Sidebar () {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div>
      <div className='full_sidebar'>
           
      
      
      <div class="navbar">
              <div class="nav1">
              
               <ul>
                  <li><Link to='/'>HOME</Link></li>
                  <li><Link to='/about'>ABOUT</Link></li>
                  <li><Link to='/contact'>CONTACT US</Link></li>
                  <li><Link to='/login'>LOGIN</Link></li>
                  <li><Link to='/signup'>REGISTER</Link></li>
                  <li><a><FaIcons.FaUserCircle/>   {username}</a></li>
                </ul>
             </div>
          </div>
      
        
          
     
          <input type='checkbox' id="check"/>
          <label for="check">
          <div id='menubar'><FaIcons.FaBars/></div>
          <div id='close'><AiIcons.AiOutlineClose/></div>
          </label>
      
      
          <div className="sidebar">
            <h2>My App</h2>
            <ul>
              <li><a href="/places"><span className='icon'><ImIcons.ImLocation/></span>Places</a></li>
              <li><Link to="/animals"><span className='icon'><ImIcons.ImLocation/></span>Animals</Link></li>
              <li><Link to="/images"><span className='icon'><BsIcons.BsImageFill/></span>Images</Link></li>
              <li><Link to="/videos"><span className='icon'><FaIcons.FaVideo/></span>Videos</Link></li>
              <li><Link to="/feedback"><span className='icon'><VscIcons.VscFeedback/></span>Feedback</Link></li>
              <li><Link to="/login"><span className='icon'><BiIcons.BiLogOut/></span>Logout</Link></li>
            </ul>
          </div>

      </div>

    
    
    </div>
   
    
  )
}