import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './pages/contact/contact';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Blogs from './pages/blogs/blogs';

const Pages = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
        <li><Link to="/Blogs">Blogs</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={App} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Blogs" component={Blogs} />
    </div>
  </Router>
);

ReactDOM.render(<Pages />, document.getElementById('root'));