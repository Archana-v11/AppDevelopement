import React from 'react'
import Sidebar from '../Bar/Sidebar'
import './Tn.css'
import { Link } from 'react-router-dom';
import Videos from '../Pages/Videos';
import Video2 from '../Pages/Video2';
export default function Gujarat() {
  return (
    <div>
    <Sidebar/><br/><br/><br/><br/><br/>
    <h1 className='im' style={{ color: 'green' }}>UTTARKHAND</h1><br/>
    <h2 style={{ color: 'red' }}>2 FAMOUS FOREST IN UTTARKHAND</h2><br/><br/><br/>
    <div className='pos_cen'>
    <div className='content_container1'>
    <img className='img_desc1'src='https://t3.ftcdn.net/jpg/01/38/20/02/360_F_138200206_JJNHoFqM3fXRyCGF3aRESosER2OHV3kf.jpg' height="30%" width="100%" alt=''/>
    <div className='text_content1'>
    <h2>1.Jim Corbett National Park</h2>
    <p>Jim Corbett National Park, established in 1936, is one of India's oldest and most famous national parks. It is located in the Nainital district of Uttarakhand and is renowned for its incredible biodiversity.
    The park is home to a significant population of Bengal tigers and various other wildlife, including leopards, elephants, deer, and numerous bird species. It is a popular destination for wildlife enthusiasts and photographers.</p>
    </div>
    </div>


    <div className='content_container2'>
    <img className='img_desc2'src='https://getwallpapers.com/wallpaper/full/0/9/8/1150231-popular-forest-wallpaper-hd-1920x1200.jpg' height="70%" width="100%"  alt=''/>
    <div className='text_content2'>
    <h2>2.Rajaji National Park</h2>
    <p>Rajaji National Park is located in the Haridwar, Dehradun, and Pauri Garhwal districts of Uttarakhand. It is a well-known protected area and a part of the Shivalik Eco-system in the Himalayas.
    The park is home to diverse wildlife, including tigers, leopards, elephants, deer, and a variety of bird species. It is named after C. Rajagopalachari, who was the last Governor-General of India and a freedom fighter.Rajaji National Park offers scenic beauty with its hilly terrain and dense forest
    , making it a great place for nature enthusiasts in exploring the wilderness.</p>
    </div>
    </div>
    </div><br/><br/><br/>

    

    {/*images*/}
    <h2 className='text'>ANIMAL IMAGES</h2><br/><br/>
    <div className='image-cont'>
    <a href="/animals">
    <img src='https://i.pinimg.com/564x/0e/e6/c1/0ee6c1ed7f0425d8f22ef31d6bde8b9c.jpg' alt='' />
    <img src='https://i.pinimg.com/564x/fd/48/e7/fd48e7d1008d3322ddafa382f187fe09.jpg' alt=''/>
    <img src='https://i.pinimg.com/236x/a7/3b/3a/a73b3aa45848aacbbf394e5318c646fc.jpg' alt=''/>
    </a>
    </div><br/><br/><br/>
    <div className='img_link'><button className='styled-button'>
            <h3>
            <Link to="/images">See More : Animal Images</Link></h3></button>
    </div>
  <br/> <br/> <br/>
   {/*Videos*/}
   <h2 className='text'>ANIMAL VIDEOS</h2>
   <Videos/>

   <div className='copyright'>
      <p>Copright 2023 Online Tutorials.All rights reserved</p>
   </div>
    </div>
  )
}
