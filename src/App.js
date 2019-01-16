import React, { Component } from 'react';
import Jumbotron from "./Components/jumbotron/Jumbotron";
import Container from "./Components/container/Container";
import Nav from "./Components/nav/Nav";
import Cards from "./Components/cards/Cards"
import heroes from "./heroes.json";
import './App.css';

class App extends Component {

  handleClick = id => {
    console.log("this was clicked!!!" + id);
    this.setState({
      currentScore: this.state.currentScore + 1
    })
  }

  state = {
    currentScore: 0,
    topScore: 0,
    heroes
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
