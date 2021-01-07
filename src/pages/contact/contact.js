import React, { useState } from 'react';
import './contact.css';


function MyForm() {

    var [nick, setNick] = useState("");
    var [email, setEmail] = useState("");
    var [message, setMessage] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault()
        let newContact = await fetch("http://localhost:4000/contacts/api/form", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nick, email, message })
        })
        let newContactForm = newContact.json();
        console.log(newContactForm);
    }

    return (
        <div className="center">
            <form onSubmit={handleSubmit}>
                <label>Name:</label><br />
                <input type="text" name="identity" onChange={e => setNick(e.target.value)}></input><br />
                <label>Email Address:</label><br />
                <input type="text" name="email" onChange={e => setEmail(e.target.value)}></input><br />
                <label>Questions or Comments:</label><br />
                <textarea placeholder="Please type in here." name="message" onChange={e => setMessage(e.target.value)} cols="50" rows="10"></textarea><br />
                <input class="submit-button" type="submit" name="send" value="Submit"></input>
            </form>
        </div>
    )
}

export default MyForm;