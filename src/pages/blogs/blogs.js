import React from 'react';
import BlogList from './BlogList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './blogs.css'
import AdminBlogList from './adminBlogList';

function Blogs() {
  return (
    <div className="App">

      {/* These lines simply start the list lower down the page as the navbar is floating */}
      <br></br>
      <hr></hr>
      <br></br>

      <div >

        <Link to="/adminBlogs">Administration</Link>
        {/* <Link to="/BlogUpdate">Update an existing blog</Link> */}
      </div>

      <BlogList />
      {/* <AdminBlogList /> */}

      {/* <hr></hr>
      <br></br>
      <BlogComp /> */}

    </div>
  )
}

export default Blogs;
