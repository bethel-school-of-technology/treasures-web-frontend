import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function AdminBlogList() {

  var [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      let blogsData = await fetch("http://localhost:4000/blogs/")
      let blg = await blogsData.json(); // used blg not blog so as not confuse with the blog var set at the top.
      console.log(blg.data.blogs);
      setBlogs(blg.data.blogs);
    }
    getAllBlogs();
  }, [])

  return (

    <div>
       <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Subject</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            blogs.map((blog, idx) => {
              return (
                <tr key={idx} >
                  <td>{index + 1}</td>
                  <td>{blog.date}</td>
                  <td>{blog.title}</td>
                  <td>
                    <span className="glyphicon glyphicon-pencil"></span>
                  </td>
                  <td>
                    <span className="glyphicon glyphicon-remove"></span>
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>

    
    // <div className="blogContainer">
    //   {blogs.map((blog, idx) => {
    //     return (
    //       <div key={idx} className={idx}>
    //         <div className="card">
    //           <div className="card-header">{blog.date}</div>
    //           <div className="card-body">
    //             <h5 className="card-title">{blog.title}</h5>
    //             <p className="card-text">{blog.description}</p>
    //             <a href={`/blogDetail/${blog._id}`} className="btn btn-primary">Read more...</a>
    //           </div>
    //         </div>
    //       </div>
    //     )
    //   })}
    // </div>

  )
}

export default AdminBlogList;