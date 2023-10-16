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
    <h1 className='im' style={{ color: 'green' }}>GUJARAT</h1><br/>
    <h2 style={{ color: 'red' }}>2 FAMOUS FOREST IN GUJARAT</h2><br/><br/><br/>
    <div className='pos_cen'>
    <div className='content_container1'>
    <img className='img_desc1'src='https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80' height="30%" width="100%" alt=''/>
    <div className='text_content1'>
    <h2>1.Gir Forest National Park</h2>
    <p>Gir Forest National Park and Wildlife Sanctuary, also known as Sasan Gir, is one of the most famous forests in Gujarat. It is renowned as the last natural habitat of the Asiatic lion (Panthera leo persica). The park is a vital conservation area for this critically endangered species.
    Gir Forest is located in the Saurashtra region of Gujarat and is a popular destination for wildlife enthusiasts and conservationists.</p>
    </div>
    </div>


    <div className='content_container2'>
    <img className='img_desc2'src='https://media.istockphoto.com/id/499021358/photo/la-paz-upperfalls.jpg?s=612x612&w=0&k=20&c=5dY6aqDHT3ibaJsw-UyDCoOowTPky4HfZQvh16Yp-so=' height="70%" width="100%"  alt=''/>
    <div className='text_content2'>
    <h2>2.Shoolpaneshwar Wildlife Sanctuary</h2>
    <p>Shoolpaneshwar Wildlife Sanctuary is located in the Narmada district of Gujarat, near the border with Madhya Pradesh. This sanctuary is situated in the hilly and forested terrain of the Satpura Range.
    The sanctuary is known for its rich biodiversity, with a variety of flora and fauna, including tigers, leopards, sloth bears, and several species of deer. It is also home to several tribal communities.</p>
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
