import React, { Component } from "react";
import "./jumbotron.css";

class Jumbotron extends Component {

    render() {
        return (
            <div className="jumbotron jumbotron-fluid" id="jumbo">{this.props.children}
                <div className="container-fluid">
                    <h1 className="display-3">Overwatch Heroes Memory Game</h1>
                    <p className="lead">Click an Ovewatch hero image to start the game. Memorize who you clicked, as you don't want to click them again!</p>
                </div>
            </div>
        );
    }
}

export default Jumbotron;