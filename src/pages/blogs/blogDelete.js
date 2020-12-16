import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

function BlogDelete() {
  let history = useHistory();
  let { id } = useParams();

  var [blog, setBlog] = useState([]);
  useEffect(() => {
    const getBlogById = async () => {
      let blogData = await fetch(`http://localhost:4000/blogs/${id}`)
      let blg = await blogData.json(); // used blg not blog so as not confuse with the blog var set at the top.
      console.log(blg.data.blog);
      setBlog(blg.data.blog);
    }
    getBlogById();
  }, [id])

  const handleDelete = async (e) => {
    e.preventDefault()
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
    history.push("/adminBlogs");
  }

  const noDelete = async (e) => {
    e.preventDefault()
    history.push("/adminBlogs");
  }

  const htmlTitle = `${blog.title}`;

  return (
    <div className="blogContainer">
      <p>{ReactHtmlParser(htmlTitle)}</p>
      <button onClick={handleDelete} type="button" className="btn btn-primary">Delete</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={noDelete} type="button" className="btn btn-primary">Cancel</button>
    </div>
  )
}

export default BlogDelete;