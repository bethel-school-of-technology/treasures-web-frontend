import React, { useState, useEffect } from 'react';


function BlogDetail() {

  // var [blog, setBlog] = useState([]);
  // useEffect(() => {
  //   const getBlogById = async () => {
  //     let blogData = await fetch("http://localhost:4000/blogs/")
  //     let blg = await blogData.json(); // used blg not blog so as not confuse with the blog var set at the top.
  //     console.log(blg.data.blogs);
  //     setBlog(blg.data.blogs);
  //   }
  //   getBlogById();
  // }, [])

  console.log("You got here!!!!")

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
      <p>This is the blog detail page</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>This is the blog detail page</p>
      
      
    </div>
  )
}

export default BlogDetail;