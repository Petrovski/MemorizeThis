import React from "react";
import "./nav.css"

const Nav = props => {
    
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            Current Score: <strong id="scores"> {props.currentScore} </strong>
                        </li>
                        <li className="nav-item">
                            Top Score: <strong id="scores"> {props.topScore} </strong>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }


export default Nav;