import React, { Component } from "react";
import "./cards.css";

class Cards extends Component {

    handleClick = event => {
        event.preventDefault();
        console.log("img was clicked!!!!")
    }

    render() {

        return (
            <div>
                <img className="img-thumbnail"
                    id={this.props.id}
                    src={this.props.image}
                    alt={this.props.name}
                    clicked={this.props.clicked}
                    onClick={this.handleClick}
                />
            </div>
        )
    }
}

export default Cards;