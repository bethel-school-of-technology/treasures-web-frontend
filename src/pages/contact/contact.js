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
}

export default MyForm;