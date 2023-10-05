import React from 'react'
import './Sample.css';
import Sidebar from '../Bar/Sidebar';
export default function Sample() {
  return (
    <div>
    <Sidebar/>
    <div className='full_img'>
    <div class="slider">
      <div class="slides">
        
        <input type="radio" name="radio-btn" id="radio1"/>
        <input type="radio" name="radio-btn" id="radio2"/>
        <input type="radio" name="radio-btn" id="radio3"/>
        <input type="radio" name="radio-btn" id="radio4"/>
       
        <div class="slide first">
          <img src="https://img.freepik.com/premium-photo/foggy-forest-mountains_763713-1880.jpg" alt=""/>
          
        </div>
        <div class="slide">
          <img src="https://i.pinimg.com/564x/70/09/c7/7009c786ddfce6795ad2d5195183bf0c.jpg" alt=""/>
          
        </div>
        <div class="slide">
          <img src="https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt=""/>
        </div>
        <div class="slide">
          <img src="https://w0.peakpx.com/wallpaper/11/904/HD-wallpaper-green-forest-forest-mystic.jpg" alt=""/>
        </div>
        <div class="slide">
          <img src="https://w0.peakpx.com/wallpaper/419/375/HD-wallpaper-river-runs-through-the-sunset-forest-orange-pine-sunset-nature-water-beauty-trees-mountains-landscape-green-glow-river-valley.jpg" alt=""/>
        </div>
        
        
        <div class="navigation-auto">
          <div class="auto-btn1"></div>
          <div class="auto-btn2"></div>
          <div class="auto-btn3"></div>
          <div class="auto-btn4"></div>
          <div class="auto-btn5"></div>
        </div>
       
      </div>
      
      <div class="navigation-manual">
        <label for="radio1" class="manual-btn"></label>
        <label for="radio2" class="manual-btn"></label>
        <label for="radio3" class="manual-btn"></label>
        <label for="radio4" class="manual-btn"></label>
        <label for="radio5" class="manual-btn"></label>
      </div>
      
    </div>
    </div>
    </div>
    )}