import React from 'react'
import './Background.css'
import video1 from '../../assets/WIN_20240417_17_29_36_Pro.mp4'
import image1 from '../../assets/cadeau.avif';
import image2 from "../../assets/ribbon.jpg";
import image3 from "../../assets/gift.avif";

export default function Background({playStatus, heroCount}) {
  if(playStatus){
    return (
        <video className='background' autoPlay loop muted  source src={video1} type ='video/mp4'/>
       
    )
  }
  else if (heroCount ==0){
    return <img src={image1} className='background' alt='image1'/>
  }
  else if (heroCount ==1){
    return <img src={image2} className='background' alt='image1'/>
  }
  else if (heroCount ==2){
    return <img src={image3} className='background' alt='image1'/>
  }
}
