import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './components/nav';
import MyForm from './pages/contact/contact';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import { useAppContext } from "../src/libs/contextLib";

import Blogs from './pages/blogs/blogs';
import AdminBlogs from './pages/blogs/adminBlogs';
import BlogComp from './pages/blogs/blogComp';
import BlogDetail from './pages/blogs/blogDetail';
import BlogDelete from './pages/blogs/blogDelete';
import BlogUpdate from './pages/blogs/blogUpdate';
import myDeclaration from './pages/declaration/declaration';
import ourHearts from './pages/hearts/hearts';
import myMentor from './pages/mentoring/mentoring';
import Resources from './pages/resources/resources';
import Whole from './pages/wholeness/wholeness';
import UserSignUp from './pages/users/userSignUp';
import Footer from './components/Footer';
import './components/nav.css';

const Pages = () => (
  <Router>
    <Nav />
    {/* <hr /> */}
    <Route exact path="/" component={App} />
    <Route path="/Contact" component={MyForm} />
    <Route path="/Blogs" component={Blogs} />
    <Route path="/AdminBlogs" component={AdminBlogs} />
    <Route path="/BlogComp" component={BlogComp} />
    <Route path="/BlogDetail/:id" component={BlogDetail} />
    <Route path="/BlogUpdate/:id" component={BlogUpdate} />
    <Route path="/BlogDelete/:id" component={BlogDelete} />
    <Route path="/Declaration" component={myDeclaration} />
    <Route path="/Hearts" component={ourHearts} />
    <Route path="/Mentoring" component={myMentor} />
    <Route path="/Resources" component={Resources} />
    <Route path="/Wholeness" component={Whole} />
    <Route path="/UserSignUp" component={UserSignUp} />

    <Footer />


  </Router>
);

ReactDOM.render(<Pages />, document.getElementById('root'));