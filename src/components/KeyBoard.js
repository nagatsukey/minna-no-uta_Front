import buttonCss from '!style!css?modules!./button.css';
import _ from 'lodash';
import React, { Component } from 'react';
import autoBind from 'react-autobind';

window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext;

const xhr = new XMLHttpRequest();
const url = 'http://133.92.145.250:3000/uploads/medium/music/9/3bai.wav';
let seBuffer = null;
xhr.onload = function() {
  if (xhr.status === 200) {
    var arrayBuffer = xhr.response;
    if (arrayBuffer instanceof ArrayBuffer) {
      var successCallback = function(audioBuffer) {
        seBuffer = audioBuffer;
      };

      var errorCallback = function(error) {
        if (error instanceof Error) {
          window.alert(error.message);
        } else {
          window.alert('Error : "decodeAudioData" method.');
        }
      };
      audioContext.decodeAudioData(arrayBuffer, successCallback, errorCallback);
    }
  }
};

xhr.open('GET', url, true);
xhr.responseType = 'arraybuffer';  // XMLHttpRequest Level 2
xhr.send(null);

export default class KeyBoard extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handle3Bai() {
    const source = audioContext.createBufferSource();
    source.buffer = seBuffer;
    source.connect(audioContext.destination);
    source.start(0);
  }

  render() {
    return (
      <div
        style={{
          marginTop: '300px',
          marginLeft: '30px',
          marginRight: '30px',
          display: 'inlineBlock',
        }}
      >
        <button
          onClick={this.handle3Bai}
          className={buttonCss.redButton}
        ></button>
        <button className={buttonCss.redButton}></button>
        <button className={buttonCss.redButton}></button>
        <button className={buttonCss.redButton}></button>
        <button className={buttonCss.redButton}></button>
        <button className={buttonCss.redButton}></button>
        <button className={buttonCss.redButton}></button>
      </div>
    );
  }
}
