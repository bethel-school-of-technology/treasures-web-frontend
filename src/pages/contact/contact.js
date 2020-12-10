import React from 'react';
import './contact.css';
import axios from 'axios';


class MyForm extends React.Component {
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
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        })
    }

    render() {
        return (
            <div>
                <form action="/Contact" method="POST">
                    <label for='name'>Name:</label><br />
                    <input type="text" id="name" name="name" onChange={this.handleChange} /><br /><br />
                    <label for='email'>Email Address:</label><br />
                    <input type="mail" id="mail" name="email" onChange={this.handleChange} /><br /><br />
                    <label for='message'>Questions or Comments:</label><br />
                    <textarea placeholder="Please type in here." id="message" name="message" cols="50" rows="10" onChange={this.handleChange}></textarea><br />
                    <input class="submit-button" type="submit" name="send" value="Submit" />
                </form>
            </div>
        )
    }
}

export default MyForm;