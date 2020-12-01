import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BlogList from './BlogList';

function Blogs() {

  var [isEdit, setIsEdit] = useState("");  //not sure on this yet
  var [blogs, setBlogs] = useState([]);
  var [blog, setBlog] = useState({});

  var [title, setTitle] = useState("");
  var [description, setDescription] = useState("");
  var [mainBody, setMainBody] = useState("");
  var [date, setDate] = useState("");

  useEffect(() => {
    const getAllBlogs = async () => {
      let blogsData = await fetch("http://localhost:4000/blogs/")
      let blg = await blogsData.json(); // used blg not blog so as not confuse with the blog var set at the top.
      console.log(blg.data.blogs);
      setBlogs(blg.data.blogs);
    }
    getAllBlogs();
  }, [])

  const handleSubmit = async () => {
    let newBlogData = await fetch("http://localhost:4000/blogs/", {
      //
      // ----------------  Need to add some data checking that all fields have data and that the date field is correctly formatted.
      //
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, mainBody, date })
    })
    let newBlog = newBlogData.json();
    console.log(newBlog);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <lable>Title: </lable>
        <input type="text" onChange={e => setTitle(e.target.value)} />
        <lable>Description: </lable>
        <input type="text" onChange={e => setDescription(e.target.value)} />
        <lable>Main Body: </lable>
        <input type="text" onChange={e => setMainBody(e.target.value)} />
        <lable>Date: </lable>
        <input type="text" onChange={e => setDate(e.target.value)} />
        <input type="submit" />
      </form>

      <br></br>
      <hr></hr>
      <br></br>
      <BlogList /> 

    </div>
  )
}



export default Blogs;
