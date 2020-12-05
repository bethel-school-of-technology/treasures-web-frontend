import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const currentDate = new Date();
const year = currentDate.getFullYear();

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <div class="container">
          <div class="row row-cols-3 order-first">
            <div class="footer-col col-lg-3">
              <h3 class="col-title">About</h3>
              <ul class="footer-menu list-unstyled">
                <li>
                  <Link class="text-link" href="#">
                    Our Heart
                  </Link>
                </li>
                <li>
                  <Link class="text-link" href="#">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link class="text-link" href="#">
                    Declarations
                  </Link>{" "}
                  <span class="badge md-info alert">Download</span>
                </li>
              </ul>
            </div>

            <div class="footer-col col-lg-3">
              <div class="divider"></div>
              <br />
              <br />
              <small class="copyright">Treasures @ {year} </small>
            </div>
            <div class="footer-col col-lg-3 order-last">
              <h3 class="col-title">Contact</h3>
              <ul class="footer-menu list-unstyled">
                <li>
                  <Link class="text-link" href="#">
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
