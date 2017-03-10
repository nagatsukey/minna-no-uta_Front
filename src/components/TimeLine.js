import React, { Component } from 'react';

export default class TimeLine extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: '#424242',
          height: '30%',
          width: '100%',
          marginTop: '40px',
          position: 'fixed',
          left: '0px',
          top: '0px',
        }}
      >
        <canvas id="timeline">
        </canvas>
      </div>
    );
  }
}
