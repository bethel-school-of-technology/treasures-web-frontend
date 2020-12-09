import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";


function BlogUpdate() {

  let { id } = useParams();
  
  var [blog, setBlog] = useState([]);
  var [title, setTitle] = useState("");
  var [description, setDescription] = useState("");
  var [mainBody, setMainBody] = useState("");
  var [date, setDate] = useState("");

  useEffect(() => {
    const getBlogById = async () => {
      let blogData = await fetch(`http://localhost:4000/blogs/${id}`)
      let blg = await blogData.json(); // used blg not blog so as not confuse with the blog var set at the top.
      console.log(blg.data.blog);
      setBlog(blg.data.blog);
    }
    getBlogById();
  }, [])


  const handleSubmit = async () => {
    let newBlogData = await fetch(`http://localhost:4000/blogs/${id}`, { 
        //
        // ----------------  Need to add some data checking that all fields have data and that the date field is correctly formatted.
        //
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, mainBody, date })
    })
    let newBlog = newBlogData.json();
    console.log(newBlog);
}

  return (
    <div className="blogContainer">

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Blog Update for ID: {id}</p>


      <form onSubmit={handleSubmit}>
        <lable for="titleN" >Title: </lable><br></br>
        <input type="text" id="titleN" name="titleN" onChange={e => setTitle(e.target.value)} size="76" value={blog.title}/><br></br>
        <lable for="descN">Description: </lable><br></br>
        <textarea id="descN" name="descN" onChange={e => setDescription(e.target.value)} rows="2" cols="75" value={blog.description}></textarea><br></br>
        {/* <input type="text" onChange={e => setDescription(e.target.value)} size="60"/><br></br> */}
        <lable for="bodyN">Main Body: </lable><br></br>
        <textarea id="bodyN" name="bodyN" onChange={e => setMainBody(e.target.value)} rows="10" cols="75" value={blog.mainBody}></textarea><br></br>
        {/* <texta type="text" onChange={e => setMainBody(e.target.value)} /><br></br> */}
        <lable for="dateN">Date: </lable><br></br>
        <input id="dateN" name="dateN"  type="date" onChange={e => setDate(e.target.value)} value={blog.date}/><br></br><br></br>
        <input type="submit" />
      </form>


      {/* <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Title: {blog.title}</p>
      <p>Description: {blog.description}</p>
      <p>Main Body: {blog.mainBody}</p>


      <a href={`/blogs`} className="btn btn-primary">Return to Blogs</a> */}


    </div>
  )
}

export default BlogUpdate;