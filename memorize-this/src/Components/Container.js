import React, { Component } from "react";

class Container extends Component {

    render() {
        return (
            <main className="container-fuid">{this.props.children}
                <p>This is the container! Images to click will go here</p>
            </main>
        );
    }
}

export default Container;