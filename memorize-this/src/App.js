import React, { Component } from 'react';
import Jumbotron from "./Components/Jumbotron"
import Container from "./Components/Container"
import Nav from "./Components/Nav"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
        <Container />
      </div>
    );
  }
}

export default App;
