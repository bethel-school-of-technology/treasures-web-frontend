import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import Logo from "./image/icon.svg";

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
            <div class="text-center" data-new-gr-c-s-check-loaded="14.991.0" data-gr-ext-installed="">
                <main class="form-login">
                    <form onSubmit={handleLogin}>
                        <img class="bd-placeholder-img" src={Logo} alt="Treasures Logo" alt=""></img>
                        <h1 class="h3 mb-3 fw-normal">Welcome Back!</h1>
                        <label for="inputName" class="visually-hidden">Name</label>
                        <input type="name" id="inputName" class="form-control" placeholder="Name" required autofocus="" onChange={(e) => setName(e.target.value)} />
                        <label for="inputPassword" class="visually-hidden">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" onChange={(e) => setPassword(e.target.value)} />
                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                        <p class="mt-5 mb-3 text-muted">© 2020</p>
                        <Link to="src/pages/users/SignUp.js">Create An Account</Link>
                    </form>
                </main>
            </div>
        </>
    );
}

export default Login;