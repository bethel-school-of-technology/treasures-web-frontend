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
        <div className="container">
          <div className="row row-cols-3 order-first">
            <div className="footer-col col-lg-3">
              <h3 className="col-title">About</h3>
              <ul className="footer-menu list-unstyled">
                <li>
                  <Link className="text-link" to="../hearts">
                    Our Heart
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="../resources">
                    Resources
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

            <div className="footer-col col-lg-3">
              <div className="divider"></div>
              <br />
              <br />
              <div className="navbar-footer">
                  <img src={Logo} className="navbar-brand-footer" alt="Treasures Logo"></img>
                  {/* <img src={require("../public/TreasuresFinSub.png")}></img> */}
                  {/* <Link className="navbar-brand" to="public/TreasuresFinSub.png"></Link> */}
              </div>
              <small className="copyright">Treasures @ {year} </small>
            </div>
            <div className="footer-col col-lg-3 order-last">
              <h3 className="col-title">Contact</h3>
              <ul className="footer-menu list-unstyled">
                <li>
                  <Link className="text-link" to="../contact">
                    Contact Us
                  </Link>
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
