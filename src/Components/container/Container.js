import React, { Component } from "react";
import "./container.css";

class Container extends Component {

    render() {
        return (
            <main className="container-fluid">{this.props.children}
                <p id="txt">This is the container! Images to click will go here</p>
            </main>
        );
    }
}

export default Container;