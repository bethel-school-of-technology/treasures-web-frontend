import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";


function SignUp() {

    let history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    //cPassword=checkPassword

    const handleSignup = async (e) => {
        e.preventDefault();
        try {

            if (password != cPassword) {
                alert("Passwords do not match");
                return;
            }

            console.log(name)
            let data = await fetch("http://localhost:4000/users/SignUp", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, password })
            })


            let user = await data.json();
            console.log(user)
            history.push('Login');
            //if (user.created) {
            //    history.push('Login');
            //} else {
            //    alert("error");
            //}

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div>
                <h1>Signup</h1>
                <form onSubmit={handleSignup}>
                    <div>
                        <label>Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" onChange={(e) => setCPassword(e.target.value)} />
                    </div>
                    <div>
                        <button >Signup</button>
                    </div>
                </form>
            </div>
            <Link to="/Login">Already A User?</Link>
        </>
    );
}

export default SignUp;