import React, { Component } from 'react';
import { connect } from 'react-redux';

class MinnaNoUta extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default  connect(
  state => state
)(MinnaNoUta);
