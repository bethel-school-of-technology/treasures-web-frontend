import React from 'react';
import AdminBlogList from './adminBlogList';
// When Router and Route are removed the link fails ---------------------------------- ???
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './blogs.css'

function AdminBlogs() {
  return (
    <div className="blogs">
      {/* --------------------------- This link should only appear if the user is logged in and authorised. */}
      <div >
        <Link className="btn btn-primary" to="/BlogComp">Create a new blog</Link>
      </div>
      <AdminBlogList />
    </div>
  )
}

export default AdminBlogs;
