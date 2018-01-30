import React, { Component } from 'react';
import './App.css';
import StoryListContainer from '../StoryListContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React HackerNews</h1>
        </header>
        <StoryListContainer />
      </div>
    );
  }
}

export default App;

