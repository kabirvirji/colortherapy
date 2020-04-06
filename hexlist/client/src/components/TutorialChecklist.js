import React, { Component } from 'react';

import './css/TutorialChecklist.css';

import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.svg'
import Flex from './Flex'

class TutorialChecklist extends Component {
  
render() {
    return (
      <div>
          <Flex flexDirection="column" container width="400px">
            <Flex flexDirection="row" container width="400px">
                <img className="logoImage" src={one}></img><p>take our color calibration quiz</p>
            </Flex>
            <Flex flexDirection="row" container width="400px">
                <img className="logoImage" src={two}></img><p>pick colors based on your mood</p>
            </Flex>
            <Flex flexDirection="row" container width="400px">
                <img className="logoImage" src={three}></img><p>generate your personalized playlist</p>
            </Flex>
          </Flex>
      </div>
    );
  }
}

export default TutorialChecklist;
