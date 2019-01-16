import React from "react";
import "./cards.css";

const Cards = props => {

        return (
            <div onClick={ () => props.handleClick(props.id) }>
                <img className="img-thumbnail"
                    id={props.id}
                    src={props.image}
                    alt={props.name}
                    clicked="false"
                />
            </div>
        )
    }

export default Cards;