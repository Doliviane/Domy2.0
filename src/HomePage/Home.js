import React, { useState } from "react";
import "./Home.css" 
import Background from "./Background/Background" 
import Hero from './Hero';
function Home() { 

     
    const [heroCount,setHeroCount] = useState(0);
    const [playStatus,setPlayStatus] = useState(false); 

    return (
      <div className="container">
        <Background playStatus={playStatus} heroCount= {heroCount}/>
        <Hero  setPlayStatus= { setPlayStatus}
        heroCount= { heroCount}
        setHeroCount = { setHeroCount}
        playStatus = { playStatus}/> 


           </div>
    );
  }
  
  export default Home;