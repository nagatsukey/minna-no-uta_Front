import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeLine from './TimeLine';
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
    return this.props.mediums.map((medium, index) => (
      <audio id="sample" key={index} src={medium.url} />
    ))[0]
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
        <TimeLine dispatch={this.props.dispatch} />
        {this.renderAudioTag()}
      </div>
    );
  }
}

export default connect(
  state => ({
    mediums: state.mediums
  })
)(Body);
