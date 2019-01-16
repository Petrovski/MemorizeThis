import React, { Component } from "react";
import "./cards.css";

class Cards extends Component {

    render() {

        return (
            <div>
                <img className="img-thumbnail"
                    src={this.props.image}
                    alt={this.props.name}
                    clicked={this.props.clicked}
                />
            </div>
        )
    }
}


export default Cards;