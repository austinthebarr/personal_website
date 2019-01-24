import React from 'react';
import Intro from './intro.jsx';
import ExtendedNetwork from './extendedNetwork.jsx';
import Contact from './contact.jsx';
import Blurbs from './blurbs.jsx';
class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="contain">

        <div className="no-padding row">
          <div className="col-sm-12 col-md-6 col-lg-6 intro-container">
            <Intro />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 network-container">
            <ExtendedNetwork />
          </div>
        </div>

        <div className="no-padding row">
          <div className="col-sm-12 col-md-6 col-lg-6 contact-container">
            <Contact />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 contact-container">
            <Blurbs />
          </div>
        </div>
      </div>
    );

  }
}



export default App;
