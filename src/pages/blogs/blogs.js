import React, {useState, useEffect} from 'react';

function Blogs() {

  var [isEdit, setIsEdit] = useState("");  //not sure on this yet
  var [blogs, setBlogs] = useState([]);
  var [blog, setBlog] = useState({});

  // {
  //   title: {
  //     type: String,
  //     required: true
  //   },
  //   description: {
  //     type: String,
  //     required: true
  //   },
  //   mainBody: {
  //     type: String,
  //     required: true
  //   },
  //   date: {
  //     type: Date,
  //     required: true
  //  }
  // }
  
  var [title, setTitle] = useState("");
  var [description, setDescription] = useState("");
  var [mainBody, setMainBody] = useState("");
  var [date, setDate] = useState("");

  useEffect(() => {
    const getAllBlogs = async () =>{
      let blogsData = await fetch("http://localhost:4000/blogs/")
      let blg = await blogsData.json(); // used blg not blog so as not confuse with the blog var set at the top.

      console.log(blg.data.blogs);

      setBlogs(blg.data.blogs);
    }

    getAllBlogs();

  }, [])

  const handleSubmit = async () =>{
    let newBlogData = await fetch("http://localhost:4000/blogs/", {
      method: "POST",
      body: JSON.stringify({title, description, mainBody, date})
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
      {blogs.map((blog, _id)=>{
        return(
          <div key={_id}>
            {blog.title} | {blog.description} | {blog.date}
          </div>
        )
      })}

    </div>
  )
}


// import logo from './logo.svg';
// import './App.css';
// this was the original code ---------------------------------------------------
// function App() {
//   return (
//     <div className="App"> 
//       <header className="App-header">
//         <p>
//           Welcome to the Treasures New Website! Hope you enjoy!
//         </p>
//         <a
//           className="App-link"
//           href="https://www.treasures.org.uk/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Treasures Current Website
//         </a>
//       </header>
//     </div>
//   );
// }

export default Blogs;
