import React from 'react';
import './contact.css';


class MyForm extends React.Component {
    render() {
        return (
            <div class="center">
                <form>
                    <label>Name:</label><br />
                    <input type="text" name="name"></input><br />
                    <label>Email Address:</label><br />
                    <input type="text" name="email-address"></input><br />
                    <label>Questions or Comments:</label><br />
                    <textarea placeholder="Please type in here." name="feedback" cols="50" rows="10"></textarea><br />
                    <input class="submit-button" type="submit" name="send" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default MyForm;