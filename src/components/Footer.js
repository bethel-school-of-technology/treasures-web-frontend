import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
                  <Link className="text-link" href="#">
                    Our Heart
                  </Link>
                </li>
                <li>
                  <Link className="text-link" href="#">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link className="text-link" href="#">
                    Declarations
                  </Link>{" "}
                  <span className="badge md-info alert">Download</span>
                </li>
              </ul>
            </div>

            <div className="footer-col col-lg-3">
              <div className="divider"></div>
              <br />
              <br />
              <small className="copyright">Treasures @ {year} </small>
            </div>
            <div className="footer-col col-lg-3 order-last">
              <h3 className="col-title">Contact</h3>
              <ul className="footer-menu list-unstyled">
                <li>
                  <Link className="text-link" href="#">
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
{
  /* <li><Link class="text-link" href="#">Contact Us</Link></li> */
}
