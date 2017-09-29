import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import HomepageLayout from './HomepageLayout'

class App extends Component {
  render() {
    return (
      <HomepageLayout />
    );
  }
}

export default App;
