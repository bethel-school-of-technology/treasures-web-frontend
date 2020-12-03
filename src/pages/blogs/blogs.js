import React from 'react';
import BlogList from './BlogList';
import BlogComp from './blogComp';
import './blogs.css'

function Blogs() {
  return (
    <div className="App">

      {/* These lines simply start the list lower down the page as the navbar is floating */}
      <br></br>
      <hr></hr>
      <br></br>

      <BlogList />
      
      <hr></hr>
      <br></br>
      <BlogComp />

    </div>
  )
}



export default Blogs;
