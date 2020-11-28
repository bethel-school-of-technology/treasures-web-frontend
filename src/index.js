import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyForm from './pages/contact/contact';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Blogs from './pages/blogs/blogs';
import myDeclaration from './pages/declaration/declaration';

const Pages = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/Contact">Contact Us</Link></li>
        <li><Link to="/Blogs">Blogs</Link></li>
        <li><Link to="Declaration">Declaration</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={App} />
      <Route path="/Contact" component={MyForm} />
      <Route path="/Blogs" component={Blogs} />
      <Route path="/Declaration" component={myDeclaration} />
    </div>
  </Router>
);

ReactDOM.render(<Pages />, document.getElementById('root'));