import React, { Component } from 'react';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'
import FilterObject from './components/Topics/FilterObject';

class App extends Component {
  render() {
    return (
      <div>
        <TopicBrowser />
      </div>
    )
  }
}

export default App;
