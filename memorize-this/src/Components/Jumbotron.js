import React, { Component } from "react";

class Jumbotron extends Component {

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">{this.props.children}
                <div className="container">
                    <p>This is the Jumbotron!</p>
                    <h1 className="display-4">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
                
            </div>
        );
    }
}

export default Jumbotron;