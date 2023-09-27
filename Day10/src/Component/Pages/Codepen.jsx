import React, { useEffect, useState } from 'react'
import './Codepen.css';
import Sidebar from '../Bar/Sidebar';
import { Link } from 'react-router-dom';

export default function Codepen() 
{
    const slides = document.querySelectorAll('.slide');
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 4000;
  let slideInterval;

  const nextSlide = () => {
    const current = slides[currentIndex];
    current.classList.remove('current');
    if (current.nextElementSibling) {
      current.nextElementSibling.classList.add('current');
      setCurrentIndex(currentIndex + 1);
    } else {
      slides[0].classList.add('current');
      setCurrentIndex(0);
    }
    setTimeout(() => current.classList.remove('current'));
  };

  const prevSlide = () => {
    const current = slides[currentIndex];
    current.classList.remove('current');
    if (current.previousElementSibling) {
      current.previousElementSibling.classList.add('current');
      setCurrentIndex(currentIndex - 1);
    } else {
      slides[slides.length - 1].classList.add('current');
      setCurrentIndex(slides.length - 1);
    }
    setTimeout(() => current.classList.remove('current'));
  };

  useEffect(() => {
    console.log(slides);
    slideInterval = setInterval(nextSlide, intervalTime);

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  return (
    <div>
    
    <div class="slider">
    
  <div class="slide current">
    <div class="content">

      <h1>Uttarkhand - Rajaji National Park</h1>
      <p>
      This Park was established in 1983 and covers an area of approximately 820 square kilometers.
      </p>
      </div>
      <Link to="/animals">Animals</Link>
      <Link to="/videos">Videos</Link>
  </div>
  <div class="slide">
    <div class="content">
      <h1>Gujarat - Gir National Park</h1>
      <p>
      This world-renowned sanctuary primarily known for one iconic species—the Asiatic lion.
      </p>
    </div>
  </div>
  <div class="slide">
    <div class="content">
      <h1>TamilNadu - Indira Gandhi Sanctuary</h1>
      <p>
      It stands as a testament to the importance of preserving natural ecosystems and the need to protect the remarkable biodiversity of the Western Ghats.
      </p>
    </div>
  </div>
  <div class="slide">
    <div class="content">
      <h1>Kerala - Periyar Tiger Reserve</h1>
      <p>
      This is a remarkable sanctuary known for its rich biodiversity and stunning natural beauty .It covers an area of approximately 925 square kilometers
      </p>
    </div>
  </div>
  <div class="slide">
    <div class="content">
      <h1>Karnataka - Bandipur National Park</h1>
      <p>
      This is a treasure trove of natural beauty and cultural heritage.It covers an area of approximately 874 square km  
      </p>
    </div>
  </div>
</div>
<div class="buttons">
  <button id="prev"><i class="fas fa-arrow-left"></i></button>
  <button id="next"><i class="fas fa-arrow-right"></i></button>
</div>
    </div>
  )
}
