import React, { useState } from "react";

import { Link } from "react-router-dom";

import { useAppContext } from "../../libs/contextLib";

function UserLogin() {

    const { isAuthenticated, userHasAuthenticated, setMessage } = useAppContext();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {


            let data = await fetch("http://localhost:4000/users/userLogin", {
                method: "POST",
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, password })
            })


            let user = await data.json();
            console.log(user)

            if (!user.hasOwnProperty('message')) {
                userHasAuthenticated(user);
                setMessage("Welcome back!");
            } else {

            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="w-1/3 mx-auto mt-16 rounded bg-white p-4">
                <h1 className="text-2xl font-bold">Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <label className="block">Name</label>
                        <input className="w-full rounded my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900" type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label className="block">Password</label>
                        <input className="w-full rounded my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="flex justify-end">
                        <button className="bg-blue-600 hover:bg-blue-500 text-white py-1 px-3 rounded ">Login</button>
                    </div>
                </form>
            </div>
            <Link className="w-full block py-2 text-center" to="/userSignUp">Create An Account</Link>
        </>
    );
}

export default UserLogin;