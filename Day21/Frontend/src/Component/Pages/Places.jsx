import React from 'react'
import Sidebar from '../Bar/Sidebar'
import './Places.css';
import { Link } from 'react-router-dom';

export default function Places() {
  return (
    <div>
    <Sidebar/>
    <div className='img_full'>
    <div className='img_slider'>
        <div className='slide1'>
            <img src='https://img.freepik.com/premium-photo/foggy-forest-mountains_763713-1880.jpg' height="10%" width="63%"/>
            <div className='info1'>
            <h2>Uttarkhand-Rajaji National Park</h2>
            <p>This Park was established in 1983 and covers an area of <br/>approximately 820 square kilometers. </p><br/>
            <div className='img_link'><button>
            <h3>
            <Link to="/animals">See More : Animals</Link>
            <Link to="/video1">Videos</Link>
            <Link to="/images">Images</Link></h3></button>
            </div>
            </div>
            </div>
            
            <div className='slide2'>
            <img src="https://i.pinimg.com/564x/70/09/c7/7009c786ddfce6795ad2d5195183bf0c.jpg" height="10%" width="63%"/>
            <div className='info2'>
               <h2>Gujarat-Gir National Park</h2>
               <p>This world-renowned sanctuary primarily known for<br/> one iconic species—the Asiatic lion </p><br/>
               
               <div className='img_link'><button>
            <h3>
            <Link to="/animals">See More : Animals</Link>
            <Link to="/video2">Videos</Link>
            <Link to="/images">Images</Link></h3></button>
            </div>

            </div>
        </div>

        <div className='slide3'>
            <img src='https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80' height="10%" width="63%"/>
            <div className='info3'>
               <h2>TamilNadu-Indira Gandhi Sanctuary</h2>
               <p>It stands as a testament to the importance of preserving natural ecosystems <br/>and the need to protect the remarkable biodiversity of the Western Ghats.</p>
               <br/>
               <div className='img_link'><button>
            <h3>
            <Link to="/animals">See More : Animals</Link>
            <Link to="/video1">Videos</Link>
            <Link to="/images">Images</Link></h3></button>
            </div>
               </div>
        </div>

        <div className='slide4'>
            <img src='https://w0.peakpx.com/wallpaper/11/904/HD-wallpaper-green-forest-forest-mystic.jpg' height="10%" width="63%"/>
            <div className='info4'>
               <h2>Kerala-Periyar Tiger Reserve</h2>
               <p>This is a remarkable sanctuary known for its rich biodiversity and stunning <br/>natural beauty .It covers an area of approximately 925 square kilometers</p>
               <br/>
               <div className='img_link'><button>
            <h3>
            <Link to="/animals">See More : Animals</Link>
            <Link to="/video1">Videos</Link>
            <Link to="/images">Images</Link></h3></button>
            </div>
               
               </div>
        </div>

        <div className='slide5'>
            <img src='https://w0.peakpx.com/wallpaper/419/375/HD-wallpaper-river-runs-through-the-sunset-forest-orange-pine-sunset-nature-water-beauty-trees-mountains-landscape-green-glow-river-valley.jpg' height="10%" width="63%"/>
            <div className='info5'>
               <h2>Karnataka-Bandipur National Park</h2>
               <p>This is a treasure trove of natural beauty and cultural heritage.<br/>It covers an area of approximately 874 square km  </p>
               <br/>
               <div className='img_link'><button>
            <h3>
            <Link to="/animals">See More : Animals</Link>
            <Link to="/video1">Videos</Link>
            <Link to="/images">Images</Link></h3></button>
            </div>
               
               </div>
        </div>

        {/*<div className='navigation'>
             <div className='img_btn'></div>
             <div className='img_btn'></div>
             <div className='img_btn'></div>
             <div className='img_btn'></div>
             <div className='img_btn'></div>
        </div>*/}
  </div>

    <script src='script.js'>
           
    
    </script>
    </div>
    </div>
  )
}
