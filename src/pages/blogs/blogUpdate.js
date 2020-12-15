import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router";

function formatDate(date) {
  var theDate = new Date(date);
  var dd = theDate.getDate();
  var mm = theDate.getMonth() + 1;
  var yyyy = theDate.getFullYear();
  if (dd < 10) {dd = '0' + dd;}
  if (mm < 10) {mm = '0' + mm;}
  // theDate = dd + '/' + mm + '/' + yyyy;
  theDate = yyyy + '-' + mm + '-' + dd;
  // console.log(theDate);
  return theDate;
}

function BlogUpdate() {
  let history = useHistory();
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
      setTitle(blg.data.blog.title);
      setDescription(blg.data.blog.description);
      setMainBody(blg.data.blog.mainBody);
      setDate(formatDate(blg.data.blog.date));
    }
    getBlogById();
  }, [id]);

  // setTitle[blog.title];
  // setDescription[blog.description];
  // setMainBody[blog.mainBody];
  // setDate[blog.date];

  const handleSubmit = async (e) => {
    e.preventDefault()
    let newBlogData = await fetch(`http://localhost:4000/blogs/${id}`, {
      //
      // ----------------  Need to add some data checking that all fields have data and that the date field is correctly formatted.
      //
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ title, description, mainBody, date })
    })
    let newBlog = newBlogData.json();
    console.log(newBlog);
    history.push("/adminBlogs");
  }

  return (
    <div className="blogs">
      <p>Blog Update for ID: {id}</p>
      <form onSubmit={handleSubmit}>
        <lable for="titleN" >Title: </lable><br></br>
        <input type="text" id="titleN" name="titleN" onChange={e => setTitle(e.target.value)} size="76" value={title} /><br></br>
        <lable for="descN">Description: </lable><br></br>
        <textarea id="descN" name="descN" onChange={e => setDescription(e.target.value)} rows="2" cols="75" value={description}></textarea><br></br>
        {/* <input type="text" onChange={e => setDescription(e.target.value)} size="60"/><br></br> */}
        <lable for="bodyN">Main Body: </lable><br></br>
        <textarea id="bodyN" name="bodyN" onChange={e => setMainBody(e.target.value)} rows="10" cols="75" value={mainBody}></textarea><br></br>
        {/* <texta type="text" onChange={e => setMainBody(e.target.value)} /><br></br> */}
        <lable for="dateN">Date: </lable><br></br>
        <input id="dateN" name="dateN" type="date" onChange={e => setDate(e.target.value)} value={date} /><br></br><br></br>
        <input type="submit" />
      </form>
    </div>
  )
}

export default BlogUpdate;