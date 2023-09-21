import React from 'react'
import { Menu } from 'antd';
import './Home.css';
import { Routes ,Route,useNavigate, Link} from 'react-router-dom';
import {  AnimationOutlined,  ImageSearchOutlined, LogoutOutlined, PlaceOutlined,  VideocamOutlined } from '@mui/icons-material';
import Header from '../Dashboard/Header';
import Footer from '../Dashboard/Footer';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/userSlice';

export default function Home() 
{
  const user = useSelector(selectUser);const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    
    <div style={{display:'flex',flexDirection:"column",flex:1,height:'-10vh'}}>
    <Header/>
    <div style={{display:'flex',flexDirection:"row",flex:1}}>
    <SideMenu/>
    <Content/>
    </div>
    
    <Footer/>
    
    </div>
    
    
    );
  }
  function SideMenu()
  {
  const navigate=useNavigate();
  return (
    <div className='menu'>
  <Menu className='menu'
  onClick={({key})=>{
     if(key==="logout")
     {
         navigate("/login");
     }
     else{
          navigate(key);
     }
  }}
  items={[
    {
      
      label: "Places" ,
      key:"/places",
      icon:<PlaceOutlined/>,
      
    },
    {
      label: "Animals" ,
      key:"/animals",
      icon:<AnimationOutlined/>,
      
    },
    {
      label: "Images",
      key:"/images",
      icon:<ImageSearchOutlined />
    },
    {
      label: "Videos",
      key:"/videos",
      icon:<VideocamOutlined/>
    },
    {
      label: "Logout",
      key:'logout',
      icon:<LogoutOutlined/> ,
      danger:true
    }
  ] }
  ></Menu></div>
   )
}
function Uttarkhand()
{
  return <div>Utharkhand</div>
}
function Content()
{
  return (<div>
  <Routes>
  <Route path="/uttarkhand" element={<div>Places</div>}></Route>
  <Route path="/animals" element={<div>Animals</div>}></Route>
  <Route path="/images" element={<div>Images</div>}></Route>
  <Route path="/videos" element={<div>Videos</div>}></Route>
  </Routes>
  <div className='home_img'>
  <img src="https://wallpapercrafter.com/desktop/15220-tree-pink-horizon-lonely-4k.jpg " height="100%" width="137%" ></img></div>
  
  <div className='title'>
  <h1>Safari Quest:</h1>
  <h2>Connecting People with wildlife</h2></div>
 
  
  </div>
  
  )
  
}
