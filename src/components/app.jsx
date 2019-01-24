import React from 'react';
import Intro from './intro.jsx';
import ExtendedNetwork from './extendedNetwork.jsx';
import Contact from './contact.jsx';
import Blurbs from './blurbs.jsx';
import MissionStatement from './mission.jsx';
class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contain no-padding col-sm-12 col-md-12 col-lg-12 row">

        <div className="col-sm-12 col-md-6 col-lg-6 intro-container">
          <Intro />
          <Contact />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 network-container ">
          <ExtendedNetwork />
          <MissionStatement />
          <Blurbs />
        </div>
      
      </div>
    );

  }
}



export default App;
