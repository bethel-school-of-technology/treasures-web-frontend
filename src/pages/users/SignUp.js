import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";
import "./SignUp.css";
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
            <div className="text-center" data-new-gr-c-s-check-loaded="14.991.0" data-gr-ext-installed="">
                <main className="form-signup">
                    <form onSubmit={handleSignup}>
                        <img className="bd-placeholder-img" src={Logo} alt="Treasures Logo" alt=""></img>
                        <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
                        <label for="inputName" className="visually-hidden">Name</label>
                        <input type="name" id="inputName" className="form-control" placeholder="Name" required autofocus="" onChange={(e) => setName(e.target.value)} />
                        <label for="inputPassword" className="visually-hidden">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" onChange={(e) => setPassword(e.target.value)} />

                        <label for="inputPassword" className="visually-hidden">Confirm Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" onChange={(e) => setCPassword(e.target.value)} />

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2020</p>
                        <Link to="/Login">Already A User?</Link>
                    </form>
                </main>
            </div>
        </>
    );
}



export default SignUp;