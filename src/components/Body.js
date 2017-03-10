import _ from 'lodash';
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
    // return this.props.mediums.map((medium, index) => (
    //   <audio id="sample" key={index} src={medium.url} />
    // ));
    const medium = this.props.mediums[0];
    if (!_.isNull(medium)) {
      try {
        return  <audio id="sample" src={medium.url} />
      } catch (err) {}
    }
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
      </div>
    );
  }
}

export default connect(
  state => ({
    mediums: state.mediums
  })
)(Body);
