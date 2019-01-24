import React from 'react';
import ProfilePhoto from './../assets/photos/ProfilePhoto.jpeg';
import OnlinePhoto from './../assets/photos/online.gif';

const Intro = () => {
  return (
    <div className="border intro">

      <h1 className="col-sm-12 col-md-12 col-lg-12">Austin Barr</h1>
      <div className="row no-padding">
        <div className="img-container col-xs-12 col-sm-6 col-md-6">
          <img src={ProfilePhoto} alt='A photo of Austin Barr'></img>

        </div>

        <div className='intro-online col-xs-12 col-sm-6 col-md-6"'>
          <p>"Web Developer"</p>
          <p>Seattle, Washington</p>
          <p><img className="myspaceImg" src={OnlinePhoto} alt="online"></img></p>
        </div>
      </div>
    </div>
  );
};

export default Intro;