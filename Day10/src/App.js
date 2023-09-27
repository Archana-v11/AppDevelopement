import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Component/Login/Login';
import Signup from './Component/SignUp/Signup';

import Home from './Component/Home/Home';

import About from './Component/Pages/About';

import Places from './Component/Pages/Places';
import Animals from './Component/Pages/Animals';
import Images from './Component/Pages/Images';
import Videos from './Component/Pages/Videos';
import Contactus from './Component/Pages/Contactus';
import FAQ from './Component/Pages/FAQ';
import Feedback from './Component/Pages/Feedback';
import Terms_condition from './Component/Pages/Terms_condition';
import Sample from './Component/Pages/Sample';
import Privacy_policy from './Component/Pages/Privacy_policy';
import Codepen from './Component/Pages/Codepen';



function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contactus/>}/>
    <Route path='/places' element={<Places/>}/>
    <Route path='/animals' element={<Animals/>}/>
    <Route path='/images' element={<Images/>}/>
    <Route path='/videos' element={<Videos/>}/>
    <Route path='/faq' element={<FAQ/>}/>
    <Route path='/feedback' element={<Feedback/>}/>
    <Route path='/privacy' element={<Privacy_policy/>}/>
  <Route path='/terms' element={<Terms_condition/>}/>
  <Route path='/code' element={<Codepen/>}/>
  
  </Routes>
  </BrowserRouter>
  
 
    
    </div>
    
    );
  }
  
  export default App;
  
  //<Route path="/home" element={<Home/>}/>
  //<ButtonAppBar/>
  //<Route path='/foot' element={<Footersample/>}/>
  //<Route path='/sample' element={<Sample/>}/>