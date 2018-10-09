import React, { Component } from 'react';
import Intro from '../Intro/index';
import './App.css';

class App extends Component {

  state = {
    series: []
  }

  componentDidMount(){

    const series = ["Ballers","Power"];
    
    setTimeout(() => {
      this.setState({series: series});
    }, 2000);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> TV Series List </p>
        </header>
        <Intro message="Here you can find all your loved series"/>
        the length of the array {this.state.series.length}
      </div>
    );
  }
}

export default App;
