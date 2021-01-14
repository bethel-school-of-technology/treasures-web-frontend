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
        var isAuth = false;
        try {
            users.map((user, idx) => {
                if (user.name === name && user.password === password)
                    isAuth = true
                return;
            })
        } catch (err) {
            console.log(err)
        }
        alert("Authentication is " + isAuth)
    }


    return (
        <>
            <div className="text-center" data-new-gr-c-s-check-loaded="14.991.0" data-gr-ext-installed="">
                <main className="form-login">
                    <form onSubmit={handleLogin}>
                        <img className="bd-placeholder-img" src={Logo} alt="Treasures Logo" alt=""></img>
                        <h1 className="h3 mb-3 fw-normal">Welcome Back!</h1>
                        <label for="inputName" className="visually-hidden">Name</label>
                        <input type="name" id="inputName" className="form-control" placeholder="Name" required autofocus="" onChange={(e) => setName(e.target.value)} />
                        <label for="inputPassword" className="visually-hidden">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" onChange={(e) => setPassword(e.target.value)} />
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
                        {/* <p className="mt-5 mb-3 text-muted">© 2020</p> */}
                        <br></br>
                        <br></br>
                        <Link to="/SignUp">Create An Account</Link>
                    </form>
                </main>
            </div>
        </>
    );
}

export default Login;