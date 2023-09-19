import  Link from '@mui/material/Link';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/userSlice';

function Login() {
    
    const[error,seterror]=useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [formdata, setFormdata] = useState({
      username: '',
      password: ''
    })
    const handleChange = (e) => {
      setFormdata({ ...formdata, [e.target.id]: e.target.value })
    }
    const formHandler=(event)=>
    {
        event.preventDefault();
        dispatch(login({
          username :formdata.username
        }))
        //validation:
        if(formdata.username.length===0 || formdata.password.length===0)
        {
          seterror(true);
        }
        if(formdata.username && formdata.password)
        {

          const loginobj={
            name:formdata.username,
            pwd:formdata.password
          }
          //console.log(loginobj);
          alert(JSON.stringify(loginobj));
          navigate("/signup");
          
        }
      }
      
      const handleSubmitButtonClick = () => {
        navigate('/signup');
      };
  return (
    <div className='full'>
    <br/><br/>
    <div className='rectangle'></div>
    <div className='body1'>
    
    <form className='form' onSubmit={formHandler}>
    <h2>LOGIN</h2>
    USERNAME:<input type="Name" value={formdata.username} placeholder="enter username" onChange={handleChange}/><br/><br/>
    <div>
    {error && formdata.username.length===0?
      <label style={{color:'red'}}>Username is required</label>:""} 
      </div>
      PASSWORD:<input type="password" value={formdata.password} placeholder="enter password" onChange={handleChange}/><br/>
      <div>
      {error && formdata.password.length===0?
        <label style={{color:'red'}}>Password is required</label>:""}<br/>
        </div>
        <br/>
        <button className="but1" >Login</button><br/><br/>
        <h5>Doesn't have an account?</h5>
        <Link href="/signup"><button type="submit" className="but2" onClick={handleSubmitButtonClick}>Signup</button></Link>
    </form>
    </div>
    </div>
    )
  }
  export default Login
  //<h6><Link href='/ForgetPassword'>FORGOT PASSWORD</Link></h6>
  //<Link href="/Description"><button class="login" >LOGIN</button></Link>
  //<div className='img1'>
  //<img src="https://e0.pxfuel.com/wallpapers/60/562/desktop-wallpaper-pastel-background-landscape-page-6-pastel-landscape-art.jpg" height="40%" width="100%"></img>
  //</div>