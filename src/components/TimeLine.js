import _ from 'lodash';
import React, { Component } from 'react';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioContext();
const gain = audioContext.createGain();
const analyser = audioContext.createAnalyser();
analyser.fftSize = 128; // 高速フーリエ変換の分割サイズ

export default class TimeLine extends Component {
  componentDidMount() {
    _.delay(() => {
      const canvas = document.getElementById('timeline');
      const canvasContext = canvas.getContext('2d');
      canvas.setAttribute('width', analyser.frequencyBinCount * 10);
      const audio = document.getElementById('sample');

      audio.addEventListener('play', (event) => {
        const source = audioContext.createMediaElementSource(audio);
        source.connect(gain);
        gain.connect(analyser);
        analyser.connect(audioContext.destination);
      })

      audio.play();

      const canvasRender = () => {
        if (!this.spectrums) {
          this.spectrums = new Uint8Array(analyser.frequencyBinCount);
        }
        analyser.getByteFrequencyData(this.spectrums);

        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0, len = this.spectrums.length; i < len; i++) {
          canvasContext.fillStyle = '#49ff2c';
          canvasContext.fillRect(i * 10, canvas.height - this.spectrums[i], 5, this.spectrums[i]);
        }

        const animationId = requestAnimationFrame(canvasRender);
      }
      canvasRender();
    }, 3000);
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#424242',
          height: '250px',
          width: '100%',
          marginTop: '40px',
          position: 'fixed',
          left: '0px',
          top: '0px',
        }}
      >
        <canvas id="timeline" height="250px" />
      </div>
    );
  }
}
