import React from 'react';
import { useParams } from "react-router";

function BlogDelete() {
  let { id } = useParams();
  const handleDelete = async () => {
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

  return (
    <div className="blogContainer">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>Got to the delete page for: {id}</p>
      <button onClick={handleDelete} type="button" className="btn btn-primary">Are you sure?</button>
    </div>
  )
}

export default BlogDelete;