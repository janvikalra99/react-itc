import React, { Component } from 'react';
import Options from './components/options';
import './style.scss';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}; // nothing here yet
  }

  render() {
    return (
      <Options />
    );
  }
}
