import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: 'gray',
          height: '40px',
          width: '100%',
          position: 'fixed',
          top: '0px',
          left: '0px',
          zIndex: '50000',
        }}
      >
        <div
          style={{
            backgroundColor: 'orange',
            width: '150px',
            height: '40px',
            position: 'fixed',
            top: '0px',
            left: '0px',
            zIndex: '50001',
            lineHeight: '40px',
            verticalAlign: 'middle',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <span> みんなのうた </span>
        </div>
      </div>
    );
  }
}
