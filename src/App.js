import React, { Component } from 'react';
import Jumbotron from "./Components/jumbotron/Jumbotron";
import Container from "./Components/container/Container";
import Nav from "./Components/nav/Nav";
import Cards from "./Components/cards/Cards"
import heroes from "./heroes.json";
import './App.css';

class App extends Component {


  // Starting scores to update later
  score = {
    userScore: 0,
    topScore: 0
  }

  hero = { array: heroes }


  checkClicked = (id, clicked) => {
    if (clicked === "true") {
      this.userScore = 0;
      console.log();

    }
  }

  // Fisher-Yates Shuffle Algo
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
        <Nav />
        <Jumbotron />
        <Container>
          {this.hero.array.map((hero, key) => (
            <Cards 
              id={hero.id}
              image={hero.image}
              clicked={hero.clicked}
              name={hero.name}
              key={key}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
