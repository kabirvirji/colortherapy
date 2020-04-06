import React, { Component } from 'react';

import './css/TitleText.css';
import Flex from './Flex'

class TitleText extends Component {
  
render() {
    return (
      <div>
            <Flex flexDirection="column" container width="750px">
                <h2>{this.props.title}</h2>
            </Flex>
      </div>
    );
  }
}

export default TitleText;
