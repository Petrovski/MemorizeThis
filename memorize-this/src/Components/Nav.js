import React from "react";

class Nav extends React.Component {
    
    render() {
        return (
            <div>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link active" href="www.google.com">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="www.google.com">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="www.google.com">Disabled</a>
                        </li>
                    </ul>
            </div>
        );
    }
}

export default Nav;