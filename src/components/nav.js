import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Logo from "./../images/TreasuresFinSub.png";
import "./nav.css";

class nav extends React.Component {
    render() {
        return (


            <nav className="navbar navbar-expand-lg">
                {/* <Link class="navbar-brand" to="/">Treasures</Link>
                <Link className="navbar-brand" to="public/TreasuresFinSub.png"></Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Declaration">Declarations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Hearts">Our Hearts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Mentoring">Mentoring</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Resources">Resources</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/SignUp">SignUp</Link>
                        </li>
                    </ul>
                    <div className="navbar-header">
                        {/* <a className="navbar-brand" href="/">Treasures</a> */}
                        <Link to="/">
                            <img src={Logo} className="navbar-logo" alt='Treasures Logo' />
                        </Link>
                        {/* <img src={Logo} alt="Treasures Logo" className="navbar-logo"></img> */}
                    </div>
                    {/* <span className="navbar-text">
                        Wholeness Through A Journey Of Love ...
    </span> */}

                </div>
            </nav>
        );
    }
}
export default nav;