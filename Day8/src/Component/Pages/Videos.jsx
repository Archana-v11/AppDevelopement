import React from 'react'
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
}
