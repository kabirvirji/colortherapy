import React, { Component } from "react";

import "./TutorialChecklist.css";
import Flex from "../Flex/Flex";

class TutorialChecklist extends Component {
  render() {
    return (
      <div>
        <Flex flexDirection='column' container width='400px'>
          <p className='checklist'>
            <strong>1)</strong> Take our unique color quiz
          </p>
          <p className='checklist'>
            <strong>2)</strong> Choose colors based on how you feel
          </p>
          <p className='checklist'>
            <strong>3)</strong> Generate a personalized playlist
          </p>
        </Flex>
      </div>
    );
  }
}

export default TutorialChecklist;
