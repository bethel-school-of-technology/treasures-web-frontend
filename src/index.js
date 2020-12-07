import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './components/nav';
import MyForm from './pages/contact/contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Blogs from './pages/blogs/blogs';
import BlogComp from './pages/blogs/blogComp';
import BlogDetail from './pages/blogs/blogDetail';
import BlogUpdate from './pages/blogs/blogUpdate';
import myDeclaration from './pages/declaration/declaration';
import ourHearts from './pages/hearts/hearts';
import myMentor from './pages/mentoring/mentoring';
import Resources from './pages/resources/resources';
import Footer from './components/Footer';
import './components/nav.css';

const Pages = () => (
  <Router>
    <hr />
    <Route exact path="/" component={App} />
    <Route path="/Contact" component={MyForm} />
    <Route path="/Blogs" component={Blogs} />
    <Route path="/BlogComp" component={BlogComp} />
    <Route path="/BlogDetail/:id" component={BlogDetail} />
    <Route path="/BlogUpdate/:id" component={BlogUpdate} />
    <Route path="/Declaration" component={myDeclaration} />
    <Route path="/Hearts" component={ourHearts} />
    <Route path="/Mentoring" component={myMentor} />
    <Route path="/Resources" component={Resources} />
    <Nav />
    <Footer />


  </Router>
);

ReactDOM.render(<Pages />, document.getElementById('root'));