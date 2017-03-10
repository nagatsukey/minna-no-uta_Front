import '!style!css!rc-slider/assets/index.css';
import buttonCss from '!style!css?modules!./button.css';
import _ from 'lodash';
import key from 'keyboard-shortcut';
import React, { Component } from 'react';
import autoBind from 'react-autobind';
import downloader from '../utils/downloader';
import Slider, { Range } from 'rc-slider';
import { connect } from 'react-redux';

window.AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext;

const marks = {
  "-40": <strong>-40</strong>,
  40: {
    style: {
      color: 'red',
    },
    label: <strong>40</strong>,
  },
};

const sliderStyle = { float: 'left', height: 200, marginLeft: 50 };

const baiurl = 'http://133.92.145.250:3000/uploads/medium/music/9/3bai.wav';
const ooonurl = 'http://133.92.145.250:3000/uploads/medium/music/12/on1.mp3';
const kaneurl = 'http://133.92.145.250:3000/uploads/medium/music/13/kane.mp3';
const bouryokuurl = 'http://133.92.145.250:3000/uploads/medium/music/15/bouryoku.mp3';
const sexurl = 'http://133.92.145.250:3000/uploads/medium/music/16/sex.mp3';

const buffers = {};
downloader(baiurl, (se) => (buffers.bai = se));
downloader(ooonurl, (se) => (buffers.ooon = se));
downloader(kaneurl, (se) => (buffers.kane = se));
downloader(bouryokuurl, (se) => (buffers.bouryoku = se));
downloader(sexurl, (se) => (buffers.sex = se));

class KeyBoard extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      baiklass: '',
      ooonklass: '',
      kaneklass: '',
      bouryokuklass: '',
      sexklass: '',
    }
  }

  componentDidMount() {
    key('q', (e) => {
      this.handle3Bai();
      this.setState({ baiklass: buttonCss.hover });
      _.delay(() => this.setState({ baiklass: '' }), 100);
    });
    key('w', (e) => {
      this.handleOoon();
      this.setState({ ooonklass: buttonCss.hover });
      _.delay(() => this.setState({ ooonklass: '' }), 100);
    });
    key('e', (e) => {
      this.handleKane();
      this.setState({ kaneklass: buttonCss.hover });
      _.delay(() => this.setState({ kaneklass: '' }), 100);
    });
    key('r', (e) => {
      this.handleBouryoku();
      this.setState({ bouryokuklass: buttonCss.hover });
      _.delay(() => this.setState({ bouryokuklass: '' }), 100);
    });
    key('t', (e) => {
      this.handleSex();
      this.setState({ sexklass: buttonCss.hover });
      _.delay(() => this.setState({ sexklass: '' }), 100);
    });
  }

  handle3Bai(event) {
    const source = audioContext.createBufferSource();
    source.buffer = buffers.bai;
    source.connect(audioContext.destination);
    source.start(0);
  }

  handleOoon() {
    const source = audioContext.createBufferSource();
    source.buffer = buffers.ooon;
    source.connect(audioContext.destination);
    source.start(0);
  }

  handleKane() {
    const source = audioContext.createBufferSource();
    source.buffer = buffers.kane;
    source.connect(audioContext.destination);
    source.start(0);
  }

  handleBouryoku() {
    const source = audioContext.createBufferSource();
    source.buffer = buffers.bouryoku;
    source.connect(audioContext.destination);
    source.start(0);
  }

  handleSex() {
    const source = audioContext.createBufferSource();
    source.buffer = buffers.sex;
    source.connect(audioContext.destination);
    source.start(0);
  }

  handleChangeSlideValue(value, hz) {
     this.props.dispatch({ type: 'CHANGE_EQUILAIZER', hz, value });
  }

  render() {
    return (
      <div>
        <div
          style={{
            marginTop: '300px',
            marginLeft: '30px',
            marginRight: '30px',
            marginBottom: '30px',
            display: 'inlineBlock',
          }}
        >
          <button
            id="3bai-button"
            onClick={this.handle3Bai}
            className={`${buttonCss.redButton} ${this.state.baiklass}`}
          ></button>
          <button
            id="ooon-button"
            onClick={this.handleOoon}
            className={`${buttonCss.redButton} ${this.state.ooonklass}`}
          ></button>
          <button
            id="kane-button"
            onClick={this.handleKane}
            className={`${buttonCss.redButton} ${this.state.kaneklass}`}
          ></button>
          <button
            id="bouryoku-button"
            onClick={this.handleBouryoku}
            className={`${buttonCss.redButton} ${this.state.bouryokuklass}`}
          ></button>
          <button
            id="sex-button"
            onClick={this.handleSex}
            className={`${buttonCss.redButton} ${this.state.sexklass}`}
          ></button>
        </div>
        <div style={sliderStyle} >
          <Slider
            vertical
            min={-40}
            max={40}
            step={1}
            marks={marks}
            included={false}
            defaultValue={0}
            style={{
              height: '300px',
              }}
            onChange={(value) => this.handleChangeSlideValue(value, '31.25Hz')}
          />
        </div>
        <div style={sliderStyle} >
          <Slider
            vertical
            min={-40}
            max={40}
            step={1}
            marks={marks}
            included={false}
            defaultValue={0}
            style={{
              height: '300px',
            }}
            onChange={(value) => this.handleChangeSlideValue(value, '62.5Hz')}
          />
        </div>
        <div style={sliderStyle} >
          <Slider
            vertical
            min={-40}
            max={40}
            step={1}
            marks={marks}
            included={false}
            defaultValue={0}
            style={{
              height: '300px',
            }}
            onChange={(value) => this.handleChangeSlideValue(value, '125Hz')}
          />
        </div>
        <div style={sliderStyle} >
          <Slider
            vertical
            min={-40}
            max={40}
            step={1}
            marks={marks}
            included={false}
            defaultValue={0}
            style={{
              height: '300px',
            }}
            onChange={(value) => this.handleChangeSlideValue(value, '250Hz')}
          />
        </div>
        <div style={sliderStyle} >
          <Slider
            vertical
            min={-40}
            max={40}
            step={10}
            marks={marks}
            included={false}
            defaultValue={0}
            style={{
              height: '300px',
            }}
            onChange={(value) => this.handleChangeSlideValue(value, '500Hz')}
          />
        </div>
        <div style={sliderStyle} >
          <Slider
            vertical
            min={-40}
            max={40}
            step={1}
            marks={marks}
            included={false}
            defaultValue={0}
            style={{
              height: '300px',
            }}
            onChange={(value) => this.handleChangeSlideValue(value, '1kHz')}
          />
        </div>
        <div style={sliderStyle} >
          <Slider
            vertical
            min={-40}
            max={40}
            step={1}
            marks={marks}
            included={false}
            defaultValue={0}
            style={{
              height: '300px',
            }}
            onChange={(value) => this.handleChangeSlideValue(value, '2kHz')}
          />
        </div>
        <div style={sliderStyle} >
          <Slider
            vertical
            min={-40}
            max={40}
            step={1}
            marks={marks}
            included={false}
            defaultValue={0}
            style={{
              height: '300px',
            }}
            onChange={(value) => this.handleChangeSlideValue(value, '4kHz')}
          />
        </div>
        <div style={sliderStyle} >
          <Slider
            vertical
            min={-40}
            max={40}
            step={1}
            marks={marks}
            included={false}
            defaultValue={0}
            style={{
              height: '300px',
            }}
            onChange={(value) => this.handleChangeSlideValue(value, '8kHz')}
          />
        </div>
        <div style={sliderStyle} >
          <Slider
            vertical
            min={-40}
            max={40}
            step={1}
            marks={marks}
            included={false}
            defaultValue={0}
            style={{
              height: '300px',
            }}
            onChange={(value) => this.handleChangeSlideValue(value, '16kHz')}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    source: state.source
  })
)(KeyBoard);
