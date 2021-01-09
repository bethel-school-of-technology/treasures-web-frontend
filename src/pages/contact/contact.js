import React, { useState } from 'react';
import './contact.css';
//import axios from 'axios';

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
                <h3>
                    Please use this form for any questions, comments, suggestions or feedback.<br />
                    We thank you for any interest you may have, and look forward to answering your questions.
                </h3>
                <label>Name:</label><br />
                <input className="round" type="text" name="nick" onChange={e => setNick(e.target.value)}></input><br />
                <label>Email Address:</label><br />
                <input className="round" type="text" name="email" onChange={e => setEmail(e.target.value)}></input><br />
                <label>Questions or Comments:</label><br />
                <textarea className="round" placeholder="Your feedback is welcome here." name="message" onChange={e => setMessage(e.target.value)} cols="50" rows="10"></textarea><br />
                <input class="submit-button" type="submit" name="send" value="Submit"></input>
            </form>
        </div>
    )
}

/*class MyForm extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }) //still need to get the handleChange working properly
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, message } = this.state
        //still need to get form defined
        const form = await axios.post('/contacts/api/form', {
            name,
            email,
            message
        })
    }

    render() {
        return (
            <div className="center">
                <form>
                    <label>Name:</label><br />
                    <input type="text" name="name" /><br />
                    <label>Email Address:</label><br />
                    <input type="text" name="email-address" /><br />
                    <label>Questions or Comments:</label><br />
                    <textarea placeholder="Please type in here." name="feedback" cols="50" rows="10"></textarea><br />
                    <input class="submit-button" type="submit" name="send" value="Submit" />
                </form>
            </div>
        )
    }
}*/

export default MyForm;