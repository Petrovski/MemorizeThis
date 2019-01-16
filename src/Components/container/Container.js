import React, { Component } from "react";
import "./container.css";

class Container extends Component {

    render() {
        return (
            <main id="heroescontainer" className="container-fluid">{this.props.children}
            </main>
        );
    }
}

export default Container;