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
        this.source = audioContext.createMediaElementSource(audio);
        const NUM_BANDS = 10;
        this.peakings  = new Array(NUM_BANDS);
        let frequency = 31.25;
        for (var i = 0; i < NUM_BANDS; i++) {
          const peaking = audioContext.createBiquadFilter();
          if (i !== 0) {
              frequency *= 2;
          }
          peaking.type            = (typeof peaking.type === 'string') ? 'peaking' : 5;
          peaking.frequency.value = frequency;
          peaking.Q.value         = 2;
          peaking.gain.value      = 0;  // The defaul value
          this.peakings[i] = peaking;
        }

        this.source.connect(gain);
        gain.connect(this.peakings[0]);
        this.peakings.forEach((peaking, index) => {
          if (index < (NUM_BANDS - 1)) {
            peaking.connect(this.peakings[index + 1]);
          } else {
            peaking.connect(analyser);
           }
         });
        analyser.connect(audioContext.destination);

	 //this.props.dispatch({type: "PUT_SOURCE_FILE", source });
        canvasRender();
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
    }, 3000);
   }

    componentDidUpdate() {
      if (!this.peakings) return;
      this.peakings[0].gain.value = this.props.equalizer["31.25Hz"];
      this.peakings[1].gain.value = this.props.equalizer["62.5Hz"];
      this.peakings[2].gain.value = this.props.equalizer["125Hz"];
      this.peakings[3].gain.value = this.props.equalizer["250Hz"];
      this.peakings[4].gain.value = this.props.equalizer["500Hz"];
      this.peakings[5].gain.value = this.props.equalizer["1kHz"];
      this.peakings[6].gain.value = this.props.equalizer["2kHz"];
      this.peakings[7].gain.value = this.props.equalizer["4kHz"];
      this.peakings[8].gain.value = this.props.equalizer["8kHz"];
      this.peakings[9].gain.value = this.props.equalizer["16kHz"];
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
