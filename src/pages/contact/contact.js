import React from 'react';
import './contact.css';


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            description: 'Please put information here.',
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let email = this.state.email;
        if (!String(email)) {
            alert("Your email must be active.");
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                    onChange={this.myChangeHandler}
                />
                <p>Enter your email:</p>
                <input
                    type='string'
                    name='email'
                />
                <br />
                <textarea value={this.state.description}
                    onChange={this.myChangeHandler} />
                <br />
                <br />
                <input type='submit' />
            </form>
        );
    }
}


export default MyForm;