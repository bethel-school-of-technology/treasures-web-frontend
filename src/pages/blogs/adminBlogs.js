import React from 'react';
import AdminBlogList from './adminBlogList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './blogs.css'


function AdminBlogs() {
  return (
    <div className="App">

      {/* These lines simply start the list lower down the page as the navbar is floating */}
      <br></br>
      <hr></hr>
      <br></br>

      <div >
        <Link to="/BlogComp">Create a new blog</Link>
        {/* <Link to="/BlogComp">Create a new blog</Link> */}
        {/* <Link to="/adminBlogList">Administration</Link> */}
        {/* <Link to="/BlogUpdate">Update an existing blog</Link> */}
      </div>

      <AdminBlogList />

    </div>
  )
}

export default AdminBlogs;
