import React, { useEffect, useState } from 'react';
import './Videos.css';

import axios from 'axios';
import ReactPlayer from 'react-player/lazy';
import Sidebar from '../Bar/Sidebar';

export default function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/auth/getVideo")
      .then((response) => {
        const filteredVideos = response.data.filter((video) => video.type === 'video');
        setVideos(filteredVideos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Sidebar/>
      <div className='videobody'>
       {/* <h1>Video List</h1><br/><br/>*/}
        <ul>
          {videos.map((video) => (
            <li key={video.id}>
              <ReactPlayer
                url={video.url}
                controls={true}
                width="550px"
                height="440px"
              />
              <br/>
            </li>
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
