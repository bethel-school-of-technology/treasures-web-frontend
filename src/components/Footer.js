import React from "react";
import './Footer.css';


class Footer extends React.Component {
    render() {
        return (
          
          <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="logo-footer">Treasures Website</div>
              <div className="info">
                <p>Location: United Kingdom</p>
                <p>Contact: (888)123-4567</p>
              </div>
              <div className="social">
                <a href="/" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="/" target="_blank">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="/" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
              <div className="copyright">
                <p>
                  <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
                  Treasures Ministries 2017
                </p>
              </div>
            </div>
          </div>
        </footer>
      
        );
    }
}

export default Footer;