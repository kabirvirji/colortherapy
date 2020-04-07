import React, { Component } from 'react';

import './css/TutorialChecklist.css';
import Flex from './Flex'

class TutorialChecklist extends Component {
  
render() {
    return (
      <div>
          <Flex flexDirection="column" container width="400px">
            <Flex flexDirection="row" container width="400px">
                <p><strong>1)</strong> Take our unique color quiz</p>
            </Flex>
            <Flex flexDirection="row" container width="400px">
                <p><strong>2)</strong> Choose your colors for today</p>
            </Flex>
            <Flex flexDirection="row" container width="400px">
                <p><strong>3)</strong> Generate a personalized playlist</p>
            </Flex>
          </Flex>
      </div>
    );
  }
}

export default TutorialChecklist;
