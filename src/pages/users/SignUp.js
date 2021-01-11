import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";
import "./users.css";
import Logo from "./image/icon.svg";


function SignUp() {

    let history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    //cPassword=checkPassword

    const handleSignup = async (e) => {
        e.preventDefault();
        try {

            if (password !== cPassword) {
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
            <div class="text-center" data-new-gr-c-s-check-loaded="14.991.0" data-gr-ext-installed="">
                <main class="form-signup">
                    <form onSubmit={handleSignup}>
                        <img class="mb-3" src={Logo} alt="Treasures Logo" alt="" width="40" height="35"></img>
                        <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>
                        <label for="inputName" class="visually-hidden">Name</label>
                        <input type="name" id="inputName" class="form-control" placeholder="Name" required autofocus="" onChange={(e) => setName(e.target.value)} />
                        <label for="inputPassword" class="visually-hidden">Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" onChange={(e) => setPassword(e.target.value)} />

                        <label for="inputPassword" class="visually-hidden">Confirm Password</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" onChange={(e) => setCPassword(e.target.value)} />

                        <div class="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p class="mt-5 mb-3 text-muted">© 2020</p>
                        <Link to="/Login">Already A User?</Link>
                    </form>
                </main>
            </div>
        </>
    );
}



export default SignUp;