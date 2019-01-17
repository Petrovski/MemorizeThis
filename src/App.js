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

  // Click event to handle heroes state and shuffling
  handleClick = (id, clicked) => {
    console.log("Image ID #" + id + " was clicked!");
    if (clicked === "true") {
      // console.log(clicked)
    } else if (clicked === "false") {
      this.setState({
        heroes: this.state.heroes === "true"
      }) 
      console.log(clicked)
    }
    this.setState({
      currentScore: this.state.currentScore + 1,
      topScore: this.state.topScore + 1,
      heroes: this.shuffle(heroes)
    })
  }


  // Fisher-Yaes Shuffle Algo for JS
  shuffle = array => {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

  render() {
    return (
      <div className="App">
        <Jumbotron />
        <Nav
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Container>
          {this.state.heroes.map( hero => (
            <Cards 
              id={hero.id}
              image={hero.image}
              name={hero.name}
              key={hero.id}
              handleClick={this.handleClick}
              shuffle={this.shuffle}
              clicked={hero.clicked}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
