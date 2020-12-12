import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class nav extends React.Component {
    render() {
        return (


            <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                {/* <Link class="navbar-brand" to="/">Treasures</Link> */}
                <Link className="navbar-brand" to="public/TreasuresFinSub.png"></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Blogs">Blogs<span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Declaration">Declaration</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Hearts">Our Hearts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Mentoring">Mentoring</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Resources">Resources</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='../Contact'>Contact</Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Wholeness Through A Journey Of Love ...
    </span>

                </div>
            </nav>
        );
    }
}
export default nav;