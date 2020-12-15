import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function formatDate(date) {
  if (date !== undefined && date !== "") {
    var myDate = new Date(date);
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",][myDate.getMonth()];
    var str = myDate.getDate() + " " + month + " " + myDate.getFullYear();
    return str;
  }
  return "";
}

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

  return (
    <div >
      {blogs.map((blog, idx) => {
        const htmlTitle = `${blog.title}`;
        const htmlDescription = `${blog.description}`;
        const dateString = formatDate(new Date(blog.date));
        // const dateString = blog.date.substring(0, 10);
        return (
          <div key={idx} className={idx}>
            <div className="card">
              <div className="card-header">
                {dateString}
                {/* <h5> */}
                {/* {ReactHtmlParser(htmlTitle)} &nbsp; {dateString} */}
                {/* </h5> */}
              </div>
              <div className="card-body">
                <h5 className="card-title">{ReactHtmlParser(htmlTitle)}</h5>
                <p className="card-text">{ReactHtmlParser(htmlDescription)}</p>
                <a href={`/blogDetail/${blog._id}`} className="btn btn-primary">Read more...</a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default BlogList;