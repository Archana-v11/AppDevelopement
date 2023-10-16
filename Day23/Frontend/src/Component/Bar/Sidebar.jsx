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
import Search from '../Pages/Search';

export default function Sidebar () {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div>
      <div className='full_sidebar'>
           
      
      
      <div class="navbar">
              <div class="nav1">
              
               <ul>
                  <li><Link to='/home'>HOME</Link></li>
                  <li><Link to='/about'>ABOUT</Link></li>
                  <li><Link to='/contact'>CONTACT US</Link></li>
                 
                  <li><Link to='/'>LOGOUT</Link></li>&nbsp;&nbsp;&nbsp;
                  <Search/>
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
              <li><a href="/uttarkhand"><span className='icon'><ImIcons.ImLocation/></span>Places</a></li>
              <li><Link to="/animals"><span className='icon'><ImIcons.ImLocation/></span>Animals</Link></li>
              <li><Link to="/images"><span className='icon'><BsIcons.BsImageFill/></span>Images</Link></li>
              <li><Link to="/video1"><span className='icon'><FaIcons.FaVideo/></span>Videos</Link></li>
              <li><Link to="/feedback"><span className='icon'><VscIcons.VscFeedback/></span>Feedback</Link></li>
              <li><Link to="/"><span className='icon'><BiIcons.BiLogOut/></span>Logout</Link></li>
            </ul>
          </div>

      </div>

    
    
    </div>
   
    
  )
}


/*import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser ,logout} from '../Redux/userSlice';

export default function ButtonAppBar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const user = useSelector(selectUser);
  const loggedIn = user.loggedIn;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = user.user && user.user.username ? user.user.username : 'Guest';

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open);
  };

  const handlejobClick = () => {
    navigate('/PageNotAvailable');
    toggleDrawer(false);
  };
  const handleHomeClick = () => {
    navigate('/Home');
    toggleDrawer(false);
  };
  const handleDesClick = () => {
    navigate('/Description');
    toggleDrawer(false);
  };
  const handleConClick = () => {
    navigate('/Contact');
    toggleDrawer(false);
  };

  const handleSearchjobClick = () => {
    navigate('/SearchJobPage');
    toggleDrawer(false);
  };

  const handleResumejobClick = () => {
    navigate('/ResumeMaker');
    toggleDrawer(false);
  };

  const handleProfilejobClick = () => {
    navigate('/AdminDashboard');
    toggleDrawer(false);
  };

  const handleAdminjobClick = () => {
    navigate('/AdminLogin');
    toggleDrawer(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.clear();
    toggleDrawer(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Lucida Console' }}>
            JOB SYMPHONY
          </Typography>

          {loggedIn ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <>
              <Button color="inherit" href="/">
                Login
              </Button>
              <Button color="inherit" href="/SignUp">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
        <div style={{ width: '250px' }}>
          <List>
            <center>Hello Again!<br/>{username}</center>
            <ListItem button onClick={handleHomeClick} >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button  onClick={handleDesClick}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button  onClick={handleConClick}>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem button onClick={handleSearchjobClick}>
              <ListItemText primary="Search jobs" />
            </ListItem>

            <ListItem button onClick={handleResumejobClick}>
              <ListItemText primary="Resume Kit" />
            </ListItem>
            <ListItem button onClick={handleProfilejobClick}>
              <ListItemText primary="Profile" />
            </ListItem>

          </List>
        </div>
      </Drawer>
    </Box>
  );
}*/