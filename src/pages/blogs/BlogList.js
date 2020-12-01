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

  // ------------- Need to validate if the className on the div is App or should be diff such as Blog?
  return (
    <div className="App"> 
      {blogs.map((blog, idx) => {
        return (
          <div key={idx} className={idx}>
            {blog._id} | {blog.title} | {blog.description} | {blog.date}
            <br></br>
            {blog.mainBody}
            <br></br>
            <br></br>
          </div>
        )
      })}
    </div>
  )
}

export default BlogList;