import React, { Component } from 'react';
import Jumbotron from "./Components/jumbotron/Jumbotron";
import Container from "./Components/container/Container";
import Nav from "./Components/nav/Nav";
import Cards from "./Components/cards/Cards"
import heroes from "./heroes.json";
import './App.css';

class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    heroes
  }

  handleClick = id => {
    console.log("Image ID #" + id + " was clicked!");
    this.setState({
      currentScore: this.state.currentScore + 1,
      topScore: this.state.topScore + 1,
      clicked: this.state.clicked === "true"
    })
  }

  render() {
    return (
      <div className="App">
        <Nav 
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <Container>
          {this.state.heroes.map( hero => (
            <Cards 
              id={hero.id}
              image={hero.image}
              name={hero.name}
              key={hero.id}
              handleClick={this.handleClick}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
