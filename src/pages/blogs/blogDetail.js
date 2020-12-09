import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";


function BlogDetail() {

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
  }, [])

  {/* <Link to={`/users/${user.id}`} activeClassName="active">{user.name}</Link>
<a href="/users/123" class="active">Michael</a>
<a href="#/users/123">Michael</a>
<Link to={`/users/${user.id}`} activeClassName="current">{user.name}</Link>
<Link to="/users" style={{color: 'white'}} activeStyle={{color: 'red'}}>Users</Link> */}

  return (
    <div className="blogContainer">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Title: {blog.title}</p>
      <p>Description: {blog.description}</p>
      <p>Main Body: {blog.mainBody}</p>
      <a href={`/blogs`} className="btn btn-primary">Return to Blogs</a>
    </div>
  )
}

export default BlogDetail;