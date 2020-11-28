import React from 'react';
import './contact.css';
import Footer from '../../components/Footer';


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            description: 'Please type in your question here.'
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
            <div>
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
                    <textarea value={this.state.description}
                        onChange={this.myChangeHandler} />
                    <br />
                    <br />
                    <input type='submit' />
                </form>
                <Footer />
            </div>

        );


    }
}


export default MyForm;