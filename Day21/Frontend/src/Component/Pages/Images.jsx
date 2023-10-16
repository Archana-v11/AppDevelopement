import React, { useEffect, useState } from 'react';
import './Images.css';
import Sidebar from '../Bar/Sidebar';
import axios from 'axios';


export default function Images() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/auth/getVideo")
      .then((response) => {
        // Filter the videos based on the 'type' attribute
        const filteredVideos = response.data.filter((image) => image.type === 'image');
        setImages(filteredVideos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Sidebar />
      <div className='imagefull'>
      <br/><br/>
        <h2>Images</h2>
        <br/>
        <ul>
          
          {images.map((image) => (
              
             
          <div className>
                <li key={image.id}>
           <img src={image.url} height="400px" width="500px"/>
            </li>
          </div>
           
           ))}
          
        </ul>
      </div>
    </div>
  );
}








/*import React from 'react'
import './Videos.css';

import ReactPlayer from 'react-player/lazy'
import Sidebar from '../Bar/Sidebar';
export default function Videos()
 {
  return (
    <div>
       <Sidebar/>
     
       <div className='player-wrapper'>
       <ReactPlayer className='react-player'
        controls={true}
         url='https://www.youtube.com/watch?v=5kozt0uDa4c'
         width='100%'
         height='800px'
       />
     </div> 
    </div>
  )
}*/




/*import React from 'react'
import './Images.css';
export default function Images() {
  return (
    <div>
    <div className='img-full'>
    <input type='radio' name='photos' id="check1" checked></input>
    <input type='radio' name='photos' id="check2" ></input>
    <input type='radio' name='photos' id="check3" ></input>
    <input type='radio' name='photos' id="check4" ></input>
    <div className='img-container'>
        <h1>WILDLIFE PHOTO GALLERY</h1>
        <div className='top-content'>
            <h3>Photo Gallery</h3>
            <label for="check1">All Photos</label>
            <label for="check2">Forest Photos</label>
            <label for="check3">Animals Photos</label>
            <label for="check4">Not Existing Animals Photos</label>
        </div>
        
        <div className='photo-gallery'>
             <div className='pic forest'>
                 <img src='https://i.pinimg.com/564x/99/2b/93/992b937aa56318d1746a7dbe975898ef.jpg'/>
             </div>
             <div className='pic animal'>
                 <img src='https://i.pinimg.com/564x/20/54/9f/20549f21fea8e3e80fd1b4624f2594f7.jpg'/>
             </div>
             <div className='pic not'>
                 <img src='https://i.pinimg.com/236x/af/33/02/af3302cd63b90176e05dd1e01e4854e1.jpg'/>
             </div>
             <div className='pic forest'>
                 <img src='https://i.pinimg.com/564x/8a/84/25/8a842551bf43c2f72de7f9ca548ae7c2.jpg'/>
             </div>
             <div className='pic animal'>
                 <img src='https://i.pinimg.com/564x/7f/37/e5/7f37e554d8476627cd9296992402906a.jpg'/>
             </div>
             <div className='pic not'>
                 <img src='https://i.pinimg.com/236x/c2/4a/33/c24a33ec7a535d7b2c39a39c70c286b0.jpg'/>
             </div>
             <div className='pic forest'>
                 <img src='https://i.pinimg.com/564x/68/2a/17/682a1725c0e214f913473f3fa0167e02.jpg'/>
             </div>
             <div className='pic animal'>
                 <img src='https://i.pinimg.com/564x/c3/98/8c/c3988cb519babc9773e1d53f4d301e32.jpg'/>
             </div>
             <div className='pic not'>
                 <img src='https://i.pinimg.com/236x/e2/34/26/e23426c0ec72f8c8e4e40ff775a22164.jpg'/>
             </div>
        </div>
    </div>
    </div>
    </div>
  )
}
























import React from 'react'
import Sidebar from '../Bar/Sidebar'
import './Images.css';
export default function Images() {
  return (
    <div>
   <Sidebar/>
   <div className='img-full'>
   <div className='img_container'>
        <div className='gallery'>
            <img src='https://i.pinimg.com/564x/99/2b/93/992b937aa56318d1746a7dbe975898ef.jpg'/>
        </div>
   </div>
   <div className='img_container'>
        <div className='gallery'>
            <img src='https://i.pinimg.com/564x/20/54/9f/20549f21fea8e3e80fd1b4624f2594f7.jpg'/>
        </div>
   </div>
   <div className='img_container'>
        <div className='gallery'>
            <img src='https://i.pinimg.com/564x/a0/df/dd/a0dfdd2a7bfd8babf2f4769697e7329e.jpg'/>
        </div>
   </div>
   <div className='img_container'>
        <div className='gallery'>
            <img src='https://i.pinimg.com/564x/8a/84/25/8a842551bf43c2f72de7f9ca548ae7c2.jpg'/>
        </div>
   </div>
   <div className='img_container'>
        <div className='gallery'>
            <img src='https://i.pinimg.com/564x/7f/37/e5/7f37e554d8476627cd9296992402906a.jpg'/>
        </div>
   </div>
   <div className='img_container'>
        <div className='gallery'>
            <img src='https://i.pinimg.com/564x/cf/07/25/cf0725dfda6680db54e4ac2c2f1f91fc.jpg'/>
        </div>
   </div>
   <div className='img_container'>
        <div className='gallery'>
            <img src='https://i.pinimg.com/564x/68/2a/17/682a1725c0e214f913473f3fa0167e02.jpg'/>
        </div>
   </div>
   <div className='img_container'>
        <div className='gallery'>
            <img src='https://i.pinimg.com/564x/0f/87/3a/0f873a33d2d1805ade9414e425cd35cc.jpg'/>
        </div>
   </div>
   <div className='img_container'>
        <div className='gallery'>
            <img src='https://i.pinimg.com/564x/c3/98/8c/c3988cb519babc9773e1d53f4d301e32.jpg'/>
        </div>
   </div>
   </div>
   </div>
  )
}*/
