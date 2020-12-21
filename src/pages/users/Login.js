import React, { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getAllUsers = async () => {
            let userData = await fetch("http://localhost:4000/users/")
            let usr = await userData.json(); // used usr not user so as not confuse with the usr var set at the top.
            console.log(usr.data.users);
            setUsers(usr.data.users);
        }
        getAllUsers();
    }, [])

    //let user = await data.json();
    //console.log()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {


            users.map((user, idx) => {
                if (user.name === name && user.password === password)
                    alert("User name or Password do not match");
                return;
            })
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