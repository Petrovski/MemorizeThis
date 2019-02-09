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
      alert("Oops.. You already clicked that! Resetting the game...");
      console.log("this is now true!!!");
      console.log(clicked);

      

      this.setState({
        currentScore: 0,
      })
    } else if (clicked === "false") {
      console.log("this is false");

      let trueArray = JSON.parse(JSON.stringify(this.state.heroes));

      for(let i=0;i<trueArray.length;i++){
        if(trueArray[i].id === id){
          console.log("we found a matching ID!!!");
          trueArray[i].clicked = "true";
          console.log(trueArray[i]);
        }
      }

      // console.log("This is the new array:", tempArray)

      this.setState({
        currentScore: this.state.currentScore + 1,
        topScore: this.state.topScore + 1,
        heroes: this.shuffle(trueArray)
      })

      if (this.state.topScore === 29) {
        alert("Congratulations! You beat the game.. great memory!");
      }
    }
    
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
              handleClick={() => this.handleClick(hero.id, hero.clicked)}
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
