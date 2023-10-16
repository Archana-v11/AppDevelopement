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

import Privacy_policy from './Component/Pages/Privacy_policy';
import Codepen from './Component/Pages/Codepen';
import Video2 from './Component/Pages/Video2';
import Search from './Component/Pages/Search';
import Uttarkhand from './Component/Pages/UttarKhand';
import Tn from './Component/Places/Tn';
import Kerala from './Component/Places/Kerala';
import Gujarat from './Component/Places/Gujarat';
import Uttar from './Component/Places/Uttar';
import Karnataka from './Component/Places/Karnataka';
import Lion from './Component/Text/Lion';
import Elephant from './Component/Text/Elephant';
import Cheetah from './Component/Text/Cheetah';






function App() {
  return (
    <div className="App">
   <BrowserRouter>
    <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contactus/>}/>

    <Route path='/places' element={<Places/>}/>
    {/*<Route path='/uttarkhand' element={<Uttarkhand/>}/>*/}
    <Route path='/tamilnadu' element={<Tn/>}/>
    <Route path='/kerala' element={<Kerala/>}/>
    <Route path='/gujarat' element={<Gujarat/>}/>
    <Route path='/uttarkhand' element={<Uttar/>}/>
    <Route path='/karnataka' element={<Karnataka/>}/>

    <Route path='/lion' element={<Lion/>}/>
    <Route path='/elephant' element={<Elephant/>}/>
    <Route path='/cheetah' element={<Cheetah/>}/>

    <Route path='/animals' element={<Animals/>}/>
    <Route path='/images' element={<Images/>}/>
    <Route path='/video1' element={<Videos/>}/>
    <Route path='/video2' element={<Video2/>}/>
    <Route path='/faq' element={<FAQ/>}/>
    <Route path='/feedback' element={<Feedback/>}/>
    <Route path='/privacy' element={<Privacy_policy/>}/>
  <Route path='/terms' element={<Terms_condition/>}/>
  <Route path='/code' element={<Codepen/>}/>
  <Route path='/search' element={<Search/>}/>
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