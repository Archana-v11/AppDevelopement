import React from 'react'
import Sidebar from '../Bar/Sidebar'
import './Tn.css'
import { Link } from 'react-router-dom';
import Videos from '../Pages/Videos';
import Video2 from '../Pages/Video2';
export default function Karnataka() {
  return (
    <div>
    <Sidebar/>
    <br/><br/><br/><br/><br/>
    <h1 className='im' style={{ color: 'green' }}>KERALA</h1><br/>
    <h2 style={{ color: 'red' }}>2 FAMOUS FOREST IN KARNATAKA</h2><br/><br/><br/>
    <div className='pos_cen'>
    <div className='content_container1'>
    <img className='img_desc1'src='https://getwallpapers.com/wallpaper/full/5/9/7/1150253-forest-wallpaper-hd-1920x1200-samsung.jpg' height="30%" width="100%" alt=''/>
    <div className='text_content1'>
    <h2>1.Nagarhole National Park (Rajiv Gandhi National Park)</h2>
    <p>Nagarhole National Park, also known as Rajiv Gandhi National Park, is located in the Kodagu and Mysore districts of Karnataka. It is part of the Nilgiri Biosphere Reserve, a UNESCO World Heritage Site.
    The park is known for its lush greenery, diverse flora, and abundant fauna. It is home to a variety of wildlife, including elephants, tigers, leopards, wild dogs, and many species of deer. The park is also renowned for its birdlife, making it a popular destination for birdwatchers.</p>
    </div>
    </div>


    <div className='content_container2'>
    <img className='img_desc2'src='https://getwallpapers.com/wallpaper/full/8/0/3/1150848-best-forest-wallpaper-hd-3000x1875-photos.jpg' height="70%" width="100%"  alt=''/>
    <div className='text_content2'>
    <h2>2.Bandipur National Park</h2>
    <p>Bandipur National Park is another prominent wildlife sanctuary in Karnataka, located in the Chamarajanagar district. It is part of the Nilgiri Biosphere Reserve and shares its borders with the Nagarhole National Park, Mudumalai National Park (Tamil Nadu), and Wayanad Wildlife Sanctuary (Kerala).
    The park is known for its rich biodiversity and is home to a significant population of tigers, along with a wide range of other wildlife species. Visitors can enjoy wildlife safaris and explore the natural beauty of the region.
    </p>
    </div>
    </div>
    </div><br/><br/><br/>

    

    {/*images*/}
    <h2 className='text'>ANIMAL IMAGES</h2><br/><br/>
    <div className='image-cont'>
    <a href="/animals">
    <img src='https://i.pinimg.com/564x/4e/26/3b/4e263bc6cbb2c4293cd5efcac2a7d479.jpg' alt='' />
    
    <img src='https://i.pinimg.com/564x/18/a8/9d/18a89d2b56258f1da66f4342bac01ee3.jpg' alt=''/>
    
    <img src='https://i.pinimg.com/564x/90/d6/85/90d685d90e03bb04888ab3a8aa55773f.jpg' alt=''/>
    </a>
    </div><br/><br/><br/>
    <div className='img_link'><button className='styled-button'>
            <h3>
            <Link to="/images">See More : Animal Images</Link></h3></button>
    </div>
  <br/> <br/> <br/>
   {/*Videos*/}
   <h2 className='text'>ANIMAL VIDEOS</h2>
   <Video2/>

   <div className='copyright'>
      <p>Copright 2023 Online Tutorials.All rights reserved</p>
   </div>
    </div>
  )
}
