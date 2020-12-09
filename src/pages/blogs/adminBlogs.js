import React from 'react';
import AdminBlogList from './adminBlogList';
// When Router and Route are removed the link fails ---------------------------------- ???
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
      </div>
      <AdminBlogList />
    </div>
  )
}

export default AdminBlogs;
