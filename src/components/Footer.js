import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Footer.css";
import Logo from "./../images/TreasuresFin.png";

const currentDate = new Date();
const year = currentDate.getFullYear();

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">

            <div className="col">
              <h3 className="col-title">About</h3>
              <ul className="footer-menu list-unstyled">
                <li>
                  <Link className="text-link" to="../hearts">
                    Our Heart
                  </Link>
                </li>
                
                <li>
                  <Link className="text-link" to="../declaration">
                    Declarations
                  </Link>{" "}
                  <span className="badge badge-info badge-sm">Download</span>
                </li>
              </ul>
            </div>

            <div className="col logo-color">
              <div className="navbar-footer">
                  <img src={Logo} className="navbar-brand-footer" alt="Treasures Logo"></img>
              </div>
              <small className="copyright">Treasures @ {year} </small>
            </div>

            <div className="col">
              <h3 className="col-title">Contact</h3>
              <ul className="footer-menu list-unstyled">
                <li>
                  <Link className="text-link" to="../contact">
                    Contact Us
                  </Link>
                  <li>
                  <Link className="text-link" to="../resources">
                    Resources
                  </Link>
                </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
