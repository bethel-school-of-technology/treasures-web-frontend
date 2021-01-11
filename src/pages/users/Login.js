import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Login.css';

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
            <div className="logged">
                <div>
                    <h1 className="infor">Please Log In</h1>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label>Name</label><br />
                            <input className="logger" type="text" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <br />
                        <div>
                            <label>Password</label><br />
                            <input className="logger" type="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <br />
                        <div>
                            <button className="subbed">Login</button>
                        </div>
                    </form>
                    <br />
                </div>
            </div>
            <div className="lower">
                <Link to="/SignUp">Create An Account</Link>
            </div>
        </>
    );
}

export default Login;