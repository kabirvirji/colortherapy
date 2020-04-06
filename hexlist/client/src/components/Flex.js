import React, { Component } from 'react';
  
  class Flex extends Component {
    
  render() {
      return (
        <div
        className={this.props.className}
        style={{
          display: this.props.container ? 'flex' : 'block',
          justifyContent: this.props.justifyContent || 'flex-start',
          flexDirection: this.props.flexDirection || 'row',
          flexGrow: this.props.flexGrow || 0,
          flexBasis: this.props.flexBasis || 'auto',
          flexShrink: this.props.flexShrink || 1,
          flexWrap: this.props.flexWrap || 'nowrap',
          flex: this.props.flex || '0 1 auto',
          alignItems: this.props.alignItems || 'stretch',
          margin: this.props.margin || '0',
          padding: this.props.padding || '0',
          width: this.props.width || 'auto',
          height: this.props.height || 'auto',
          maxWidth: this.props.maxWidth || 'none'
        }}
      >
        {this.props.children}
      </div>
      );
    }
  }
  
  export default Flex;
  