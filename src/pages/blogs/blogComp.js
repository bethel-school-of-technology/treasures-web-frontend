import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function BlogComp() {
    const history = useHistory();

    var [title, setTitle] = useState("");
    var [description, setDescription] = useState("");
    var [mainBody, setMainBody] = useState("");
    var [date, setDate] = useState("");

    const handleSubmit = async () => {
        let newBlogData = await fetch("http://localhost:4000/blogs/", { 
            //
            // ----------------  Need to add some data checking that all fields have data and that the date field is correctly formatted.
            //
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description, mainBody, date })
        })
        let newBlog = newBlogData.json();
        console.log(newBlog);

        history.push("/blogs"); // trying to redirect to the blogs page ---------- NOT WORKING !!!
    }

    return (
        <div className="App">
            {/* These lines move the form down below the navbar */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <form onSubmit={handleSubmit}>
                <lable for="titleN" >Title: </lable><br></br>
                <input type="text" id="titleN" name="titleN" onChange={e => setTitle(e.target.value)} size="76"/><br></br>
                <lable for="descN" >Description: </lable><br></br>
                <textarea id="descN" name="descN" onChange={e => setDescription(e.target.value)} rows="2" cols="75"></textarea><br></br>
                {/* <input type="text" onChange={e => setDescription(e.target.value)} size="60"/><br></br> */}
                <lable for="bodyN" >Main Body: </lable><br></br>
                <textarea id="bodyN" name="bodyN" onChange={e => setMainBody(e.target.value)} rows="10" cols="75"></textarea><br></br>
                {/* <texta type="text" onChange={e => setMainBody(e.target.value)} /><br></br> */}
                <lable for="dateN" >Date: </lable><br></br>
                <input id="dateN" name="dateN" type="date" onChange={e => setDate(e.target.value)} /><br></br><br></br>
                <input type="submit" />
            </form>

            <div>
                <br></br>
                Not yet returning to blogs page once new blog has been created.
            </div>
        </div>
    )
}

export default BlogComp;