import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className="border contact box-padding">
      <div className="row">
        <div className="col-xs-3 col-sm-6 col-md-6">
          <h2><FontAwesomeIcon icon={faGithub} className="icon" />Github</h2>
          <a><h2><FontAwesomeIcon icon={faEnvelope} className="icon" />Message</h2></a>
        </div>

        <div className="col-xs-3 col-sm-6 col-md-6">
          <a><h2><FontAwesomeIcon icon={faLinkedin} className="icon" />LinkedIn</h2></a>
          <a><h2><FontAwesomeIcon icon={faThumbsUp} className="icon" />LikePage</h2></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;