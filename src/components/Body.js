import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeLine from './TimeLine';
import KeyBoard from './KeyBoard';
import autoBind from 'react-autobind';

class Body extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.dispatch({ type: 'DONWLOAD_MUSIC' });
  }

  renderAudioTag() {
    // return this.props.mediums.map((medium, index) => (
    //   <audio id="sample" key={index} src={medium.url} />
    // ));
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: '#06142f',
          height: '100%',
          width: '100%',
          marginTop: '40px',
          position: 'fixed',
          left: '0px',
          top: '0px',
        }}
      >
        {this.renderAudioTag()}
        <TimeLine dispatch={this.props.dispatch} />
        <audio
          id="sample"
          src="http://133.92.145.250:3000/uploads/medium/music/5/Chuunibyou_-_If_I_Had_You_-_Leather_and_Skirt.mp3"
        />
        <KeyBoard />
      </div>
    );
  }
}

export default connect(
  state => ({
    mediums: state.mediums
  })
)(Body);
