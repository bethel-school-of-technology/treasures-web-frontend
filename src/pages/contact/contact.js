import React from 'react';
import './contact.css';


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: 'string',
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let email = this.state.email;
        if (!String(email)) {
            alert("Your email must be a valid email address.");
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    render() {
        return (
            <div class="center">
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
                    <br />
                    <textarea placeholder="Place your questions or comments in here."></textarea>
                    <br />
                    <br />
                    <input class="submit-button" type='submit' />
                </form>
            </div>
        );
    }
}


export default MyForm;