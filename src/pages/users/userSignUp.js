import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";

import { useAppContext } from "../../libs/contextLib";

function UserSignUp() {

    let history = useHistory();
    //const { isAuthenticated, userHasAuthenticated } = useAppContext();
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
            let data = await fetch("http://localhost:4000/users/userSignUp", {
                method: "POST",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, password })
            })


            let user = await data.json();

            if (user.created) {
                history.push('userLogin');
            } else {
                alert("error");
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="w-1/3 mx-auto mt-16 bg-white p-4 rounded">
                <h1 className="text-2xl font-bold">Signup</h1>
                <form onSubmit={handleSignup}>
                    <div>
                        <label className="block">Name</label>
                        <input className="w-full rounded my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900" type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label className="block">Password</label>
                        <input className="w-full rounded my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label className="block">Confirm Password</label>
                        <input className="w-full rounded my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900" type="password" onChange={(e) => setCPassword(e.target.value)} />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-blue-600 hover:bg-blue-500 text-white py-1 px-3 rounded ">Signup</button>
                    </div>
                </form>
            </div>
            <Link className="w-full block py-2 text-center" to="/userLogin">Already A User?</Link>
        </>
    );
}

export default UserSignUp;