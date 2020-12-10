// import React, {useState, useEffect} from 'react';

// function BlogEdit() {

//     var [isEdit, setIsEdit] = useState("");
//     var [blog, setBlog] = useState([]);
//     var [title, setTitle] = useState("");
//     var [description, setDescription] = useState("");
//     var [mainBody, setMainBody] = useState("");
//     var [date, setDate] = useState("");


//     useEffect(() => {
//         const getAllBlogs = async () => {
//             let blogData = await fetch("http://localhost:3000/blogs")
//             let blg = await blogData.json();

            // console.log(blg);
            // setBlog(blg.data.blog);
//         }

//         getAllBlogs();

// }, [])


    // return (
    //     <div className="App"
    // )
// }

// export default BlogEdit;