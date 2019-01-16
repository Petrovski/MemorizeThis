import React, { Component } from "react";
import "./nav.css"

class Nav extends Component {
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="www.google.com">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="www.google.com">Disabled</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;