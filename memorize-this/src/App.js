import React, { Component } from 'react';
import Jumbotron from "./Components/jumbotron/Jumbotron";
import Container from "./Components/container/Container";
import Nav from "./Components/nav/Nav";
import heroes from "./heroes.json";
import './App.css';

class App extends Component {

  // Set state to pull heroes.json, which contains all the images and hero names
  state = { heroes }


  // Starting scores to update later
  score = {
    userScore: 0,
    highScore: 0
  }

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
