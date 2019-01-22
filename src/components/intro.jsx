import React from 'react';
import ProfilePhoto from './../assets/photos/profilePhoto.jpg';
const Intro = () => {
  return (
    <div>
      <div>
        <h1>Austin Barr</h1>
        <img src={ProfilePhoto} alt='A photo of Austin Barr'></img>
      </div>
      <div className='intro-online'>
        <p>Online</p>
      </div>
    </div>
  );
};

export default Intro;