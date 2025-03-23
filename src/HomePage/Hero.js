import React from 'react'
import './Hero.css'
import pause_icon from '../assets/pause-button.png';
import play_icon from '../assets/play.png';
import { FaArrowAltCircleRight  } from "react-icons/fa";

export default function Hero({ setHeroCount, heroCount, setPlayStatus, playStatus}) {

  return (
    
    <div className='hero'>  
      <div className='hero-text'>
        <p className='text1'>  welcome to the DoMyWish , a beautiful present for your loved ones</p>
        <p className='text2'>  Give them a Present they' ll love"</p>
      </div>
      <div className='hero-explore'>
        <a href='../create/create.js'> Let's create your present together</a>
        <FaArrowAltCircleRight />
      </div>
      <div className='hero-dot-play'>
        <ul className='hero-dots'>
            <li onClick={()=> setHeroCount(0)} className={heroCount===0? "hero-dot orange" : "hero-dot"} > </li>
            <li onClick={()=> setHeroCount(1)} className={heroCount===1? "hero-dot orange" : "hero-dot"} > </li>
            <li onClick={()=> setHeroCount(2)} className={heroCount===2? "hero-dot orange" : "hero-dot"} > </li>
            </ul>
       <div className='hero-play'>
      <img onClick={()=>setPlayStatus(!playStatus)}  src={playStatus? pause_icon: play_icon }alt=" " />
      <p> see The video</p>
      </div>
      </div>
    </div>
  )
}
