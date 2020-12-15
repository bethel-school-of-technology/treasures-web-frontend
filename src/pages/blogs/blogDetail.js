import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import ReactHtmlParser from 'react-html-parser';

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
  }, [id])

  const htmlTitle = `${blog.title}`;
  const htmlDescription = `${blog.description}`;
  const htmlMainBody = `${blog.mainBody}`;

  return (
    <div className="blogs">
      <div>
        <h3>{ReactHtmlParser(htmlTitle)}</h3>
      </div>
      <div>
        {ReactHtmlParser(htmlDescription)}
      </div>
      <div>
        {ReactHtmlParser(htmlMainBody)}
      </div>
      <a href={`/blogs`} className="btn btn-primary">Return to Blogs</a>
    </div>
  )
}

export default BlogDetail;