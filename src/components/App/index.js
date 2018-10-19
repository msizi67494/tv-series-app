import React, { Component } from 'react';
import Intro from '../Intro/index';
import 'whatwg-fetch';
import Main from '../../components/main/index';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> TV Series List </p>
        </header>
        <Intro message="Here you can find all your loved series"/>
        
        <Main />
      </div>
    );
  }
}

export default App;
