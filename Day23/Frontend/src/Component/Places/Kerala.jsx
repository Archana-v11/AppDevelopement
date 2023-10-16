import React from 'react'
import Sidebar from '../Bar/Sidebar'
import './Tn.css'
import { Link } from 'react-router-dom';
import Videos from '../Pages/Videos';
import Video2 from '../Pages/Video2';
export default function Kerala() {
  return (
    <div>
    <Sidebar/><br/><br/><br/><br/><br/>
    <h1 className='im' style={{ color: 'green' }}>KERALA</h1><br/>
    <h2 style={{ color: 'red' }}>2 FAMOUS FOREST IN KERALA</h2><br/><br/><br/>
    <div className='pos_cen'>
    <div className='content_container1'>
    <img className='img_desc1'src='https://getwallpapers.com/wallpaper/full/1/b/e/1150630-forest-wallpaper-hd-1920x1200-lockscreen.jpg' height="30%" width="100%" alt=''/>
    <div className='text_content1'>
    <h2>1.Periyar Wildlife Sanctuary</h2>
    <p>Periyar Wildlife Sanctuary, located in Thekkady, is one of the most well-known wildlife reserves in Kerala. It's renowned for its diverse flora and fauna, including elephants, tigers, sambar deer, and a variety of bird species.
    The sanctuary is famous for its picturesque Periyar Lake, where visitors can go boating and watch animals from a safe distance.</p>
    </div>
    </div>


    <div className='content_container2'>
    <img className='img_desc2'src='https://cdn.wallpapersafari.com/65/89/4kc65v.jpg' height="70%" width="100%"  alt=''/>
    <div className='text_content2'>
    <h2>2.Silent Valley National Park</h2>
    <p>Silent Valley National Park is located in the Palakkad district of Kerala. It is known for its unique and pristine tropical evergreen rainforest ecosystem.
    The park is home to a wide variety of plant and animal species, including rare and endangered ones. It is considered one of the last undisturbed tropical rainforests in the Western Ghats.
    </p>
    </div>
    </div>
    </div><br/><br/><br/>

    

    {/*images*/}
    <h2 className='text'>ANIMAL IMAGES</h2><br/><br/>
    <div className='image-cont'>
    <a href="/animals">
    <img src='https://i.pinimg.com/564x/08/da/af/08daaf07b496c4f2a2610b876782f551.jpg' alt='' />
    <img src='https://i.pinimg.com/564x/77/49/88/774988c60875c65126b01772e1c0dd49.jpg' alt=''/>
    <img src='https://i.pinimg.com/564x/a9/88/ff/a988ff6c47a7e2b39f201c749c386062.jpg' alt=''/>
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
