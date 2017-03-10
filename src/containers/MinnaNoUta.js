import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Body from '../components/Body';

class MinnaNoUta extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default connect()(MinnaNoUta);
