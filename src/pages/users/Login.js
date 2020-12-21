import React, { useState } from "react";

import { Link } from "react-router-dom";


function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {


            let data = await fetch("http://localhost:4000/users/Login", {
                method: "POST", //GET
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, password })
            })


            let user = await data.json();
            console.log(user)

            //if (!user.hasOwnProperty('message')) {
            //    userHasAuthenticated(user);
            //    userHasAuthenticated(user);
            //    setMessage("Welcome back!");
            //} else {

            //}
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Name</label>
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
            <Link to="/SignUp">Create An Account</Link>
        </>
    );
}

export default Login;