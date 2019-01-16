import React, { Component } from "react";
import "./jumbotron.css";

class Jumbotron extends Component {

    render() {
        return (
            <div className="jumbotron jumbotron-fluid" id="jumbo">{this.props.children}
                <div className="container-fluid">
                    <h1 className="display-4">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
        );
    }
}

export default Jumbotron;