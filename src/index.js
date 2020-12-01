import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyForm from './pages/contact/contact';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Blogs from './pages/blogs/blogs';
import myDeclaration from './pages/declaration/declaration';
import ourHearts from './pages/hearts/hearts';
import myMentor from './pages/mentoring/mentoring';
import Resources from './pages/resources/resources';
import Footer from './components/Footer';
import './components/nav.css';

const Pages = () => (
  <Router>
    <nav class="navbar">
    <div class="Main">
      <Link class='navBarLink' to="/">Home Page</Link>
      <Link class='navBarLink' to="/Blogs">Blogs</Link>
      <Link class='navBarLink' to="Declaration">Declaration</Link>
      <Link class='navBarLink' to="Hearts">Our Hearts</Link>
      <Link class='navBarLink' to="Mentoring">Mentoring</Link>
      <Link class='navBarLink' to="Resources">Resources</Link>
      <Link class='navBarLink' to="/Contact">Contact Us</Link>
      <div class="logo">Treasures Logo</div>
      <hr />
      <Route exact path="/" component={App} />
      <Route path="/Contact" component={MyForm} />
      <Route path="/Blogs" component={Blogs} />
      <Route path="/Declaration" component={myDeclaration} />
      <Route path="/Hearts" component={ourHearts} />
      <Route path="/Mentoring" component={myMentor} />
      <Route path="/Resources" component={Resources} />
      <Footer />
    </div>
    </nav>
  </Router>
);

ReactDOM.render(<Pages />, document.getElementById('root'));