import React, { useState, useEffect } from 'react';

function BlogList() {

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

  // ------------- Need to validate if the className on the div is App or should be different such as Blog? 
  // 
  return (
    <div className="blogContainer">
      {blogs.map((blog, idx) => {
        return (
          // <div >

            <div key={idx} className={idx}>

              <div className="card">
                <div className="card-header">{blog.date}</div>
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.description}</p>
                  <a href="#" className="btn btn-primary">Read more... | _id = {blog._id}</a>
                </div>
              </div>

              {/* {blog._id} | {blog.title} | {blog.description} | {blog.date}
              <br></br>
              {blog.mainBody} */}

            </div>
          // </div>

        )
      })}
    </div>
  )
}

export default BlogList;