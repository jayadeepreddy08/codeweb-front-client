import React from 'react';
import Blob from './blob';
import {Tile1, Tile2} from './Tile';
import pic from './pond.jpg';
import homepic from './homepic.jpg'
//import {  Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
       
      <div className='first'>
        <div className='intro'>
          <h1>Hello!</h1>
          <h4>Just a developer finding his repo!!</h4>
          <p>Find my solutions for LeetCode problems and useful articles on networks and cybersecurity</p>
        </div>
        <Blob />
        <div className='intro_img'>
        <img src={pic} alt="pic" className='profile-photo'/>
        </div>
      </div>
      <div className='tile-container' style={{ backgroundImage: `url(${homepic})` }}>
      
        <div className="tile"> {/* Here we add the className tile */}
          <Tile1 />
        </div>
        <div className="tile"> 
         <Tile2 />
        </div>
      </div>
      
      
      
    
    </div>
  );
}

export default Home;
