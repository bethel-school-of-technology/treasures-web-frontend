import React from 'react';
import BlogList from './BlogList';
import BlogComp from './blogComp';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './blogs.css'

function Blogs() {
  return (
    <div className="App">

      {/* These lines simply start the list lower down the page as the navbar is floating */}
      <br></br>
      <hr></hr>
      <br></br>

      <div >
        <Link to="/BlogComp">Create a new blog</Link>
      </div>

      <BlogList />

      {/* <hr></hr>
      <br></br>
      <BlogComp /> */}

    </div>
  )
}

export default Blogs;
