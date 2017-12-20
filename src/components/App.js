import React, { Component } from 'react';
import Navbar from './Navbar.js';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
