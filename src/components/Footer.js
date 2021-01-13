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
              <div className="col-1-2">
                <h4 className="col-title">About</h4>
                <ul className="footer-menu list-unstyled">
                  <li>
                    <Link className="text-link" to="../hearts">
                      Our Hearts
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
            </div>

            <div className="col">
              <div className="navbar-footer">
                <img src={Logo} className="navbar-brand-footer" alt="Treasures Logo"></img>
              </div>
              <small className="copyright">Treasures @ {year} </small>
            </div>

            <div className="col">
              <div className="col-1-2">
                <h4 className="col-title">Contact</h4>
                <ul className="footer-menu list-unstyled">
                  <li>
                    <Link className="text-link" to="../contact">
                      Contact Us
                  </Link>
                    <li>
                      <Link className="text-link" to="/Login">
                        Login
                  </Link>
                    </li>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
