import React, { Component } from "react";
import "./nav.css"

class Nav extends Component {
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            Current Score: 0
                        </li>
                        <li className="nav-item">
                            Top Score: 0
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;