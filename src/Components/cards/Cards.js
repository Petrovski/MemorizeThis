import React from "react";
import "./cards.css";

const Cards = props => {

        return (
            <div>
                <img className="img-thumbnail"
                    id={props.id}
                    src={props.image}
                    alt={props.name}
                    clicked={props.clicked}
                    onClick={() => props.handleClick(props.id, props.clicked)}
                />
            </div>
        )
    }

export default Cards;