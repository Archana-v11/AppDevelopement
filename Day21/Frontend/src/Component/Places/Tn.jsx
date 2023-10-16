import React from 'react'
import Sidebar from '../Bar/Sidebar'
import './Tn.css'
import { Link } from 'react-router-dom';
import Videos from '../Pages/Videos';
export default function Tn() {
  return (
    <div>
    <Sidebar/><br/><br/><br/><br/><br/>
    <h1 style={{ color: 'green' }}>TAMILNADU</h1><br/>
    <h2 style={{ color: 'red' }}>2 FAMOUS FOREST IN TAMILNADU</h2><br/><br/><br/>
    <div className='pos_cen'>
    <div className='content_container1'>
    <img className='img_desc1'src='https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80' height="30%" width="100%" alt=''/>
    <div className='text_content1'>
    <h2>1.Mudumalai National Park and Wildlife Sanctuary</h2>
    <p>Located in the Nilgiri Hills, Mudumalai is one of the largest and oldest wildlife sanctuaries in South India. It is known for its rich biodiversity and diverse flora and fauna. Visitors can spot a variety of wildlife, including elephants, tigers, leopards, wild dogs, and numerous bird species. The hilly terrain and dense forests make it a popular destination for wildlife enthusiasts and nature lovers.</p>
    </div>
    </div>


    <div className='content_container2'>
    <img className='img_desc2'src='https://wallpapers.com/images/featured/forest-o8tny79q1njt8ahw.jpg' height="30%" width="100%"  alt=''/>
    <div className='text_content2'>
    <h2>2.Indira Gandhi Wildlife Sanctuary and National Park</h2>
    <p>This sanctuary, located in the Western Ghats of Tamil Nadu, is known for its lush greenery and diverse wildlife. It is named after former Prime Minister of India, Indira Gandhi. The sanctuary is home to various species of animals, including elephants, tigers, leopards, and several species of primates. The park is also known for its picturesque landscapes and trekking opportunities.</p>
    </div>
    </div>
    </div><br/><br/><br/>

    

    {/*images*/}
    <h2 className='text'>ANIMAL IMAGES</h2><br/><br/>
    <div className='image-cont'>
    <a href="/animals">
    <img src='https://i.pinimg.com/564x/0f/87/3a/0f873a33d2d1805ade9414e425cd35cc.jpg' alt='' />
    <img src='https://i.pinimg.com/564x/2b/bc/b4/2bbcb4fdd9794938e725f17246737cc3.jpg' alt=''/>
    <img src='https://i.pinimg.com/564x/8f/09/66/8f09669838f512c7a9a9230472997a6b.jpg' alt=''/>
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
