import React from 'react';
import AdminBlogList from './adminBlogList';
// When Router and Route are removed the link fails ---------------------------------- ???
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './blogs.css'

function AdminBlogs() {
  return (
    <div className="blogContainer">
      <div >
        <Link to="/BlogComp">Create a new blog</Link>
      </div>
      <AdminBlogList />
    </div>
  )
}

export default AdminBlogs;
