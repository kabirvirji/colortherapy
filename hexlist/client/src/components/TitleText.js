import React, { Component } from 'react';

import './css/TitleText.css';
import Flex from './Flex'

class TitleText extends Component {
  
render() {
    return (
      <div className="container">
          <h2>{this.props.title}</h2>
      </div>
    );
  }
}

export default TitleText;
