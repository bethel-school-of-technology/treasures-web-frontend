import React, { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { useHistory, useParams } from "react-router-dom";

function formatDate(date) {
  if (date !== undefined && date !== "") {
    var myDate = new Date(date);
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",][myDate.getMonth()];
    var str = myDate.getDate() + " " + month + " " + myDate.getFullYear();
    return str;
  }
  return "";
}

function AdminBlogList() {
  var [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      let blogsData = await fetch("http://localhost:4000/blogs/")
      let blg = await blogsData.json(); // used blg not blog so as not confuse with the blog var set at the top.
      // console.log(blg.data.blogs);
      setBlogs(blg.data.blogs.sort(function (a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return d - c;   // sorting newest date first on the list
      }));
    }
    getAllBlogs();
  }, [])

  return (
    <div className="adminBlogContainer">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            blogs.map((blog, idx) => {
              const htmlTitle = `${blog.title}`;
              // const dateString = blog.date.substring(0, 10);
              const dateString = formatDate(new Date(blog.date));
              return (
                <tr key={idx} >
                  {/* <p> {{ date | date:'dd MMMM yyyy'}} </p> */}
                  {/* var n = d.toDateString(); */}

                  <td>{dateString}</td>
                  <td>{ReactHtmlParser(htmlTitle)}</td>
                  <td>
                    <a href={`/blogUpdate/${blog._id}`} className="btn btn-outline-primary">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </a>
                    {/* <span className="glyphicon glyphicon-pencil"></span> */}
                  </td>
                  <td>
                    {/* <button onClick={handleDelete(blog._id)} type="button" className="btn btn-outline-primary">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                      </svg>
                    </button> */}
                    <a href={`/blogDelete/${blog._id}`} className="btn btn-outline-primary">
                      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                      </svg>
                    </a>
                    {/* <span className="glyphicon glyphicon-remove"></span> */}
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>

  )
}

export default AdminBlogList;