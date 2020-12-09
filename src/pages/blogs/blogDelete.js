import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";


function BlogDelete() {

  let { id } = useParams();

  const handleSubmit = async () => {
    let delBlogData = await fetch(`http://localhost:4000/blogs/${id}`, { 
        //
        // ----------------  Need to add some data checking that all fields have data and that the date field is correctly formatted.
        //
        method: "DELETE",
        headers: { 'Content-Type': 'application/json' },
        // body: JSON.stringify({ title, description, mainBody, date })
    })
    let delBlog = delBlogData.json();
    console.log(delBlog);
}

  var [blog, setBlog] = useState([]);
  // useEffect(() => {
  //   const getBlogById = async () => {
  //     let blogData = await fetch(`http://localhost:4000/blogs/${id}`)
  //     let blg = await blogData.json(); // used blg not blog so as not confuse with the blog var set at the top.
  //     console.log(blg.data.blog);
  //     setBlog(blg.data.blog);
  //   }
  //   getBlogById();
  // }, [])

  return (
    <div className="blogContainer">

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Got to the delete page for: {id}</p>
      
    </div>
  )
}

export default BlogDelete;