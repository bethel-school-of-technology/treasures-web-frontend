import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class nav extends React.Component {
    render() {
        return (


            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Treasures</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link class="nav-link" to="/Blogs">Blogs<span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="Declaration">Declaration</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="Hearts">Our Hearts</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="Mentoring">Mentoring</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="Resources">Resources</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='../Contact'>Contact</Link>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Wholeness Through A Journey Of Love ...
    </span>

                </div>
            </nav>
        );
    }
}
export default nav;