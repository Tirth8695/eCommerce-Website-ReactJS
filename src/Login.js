// login page
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    //fetch user data from local storage
    const userData = localStorage.getItem('user');
    let user = [];
    if (userData) {
        user = JSON.parse(userData);
    } else {
        user = [{
            email: "assignment@gmail.com",
            password: "111111",
            fName: "Assignment",
            lName: "1",
            address: "Waterloo, ON",
        }];
        //save this data to local storage
        localStorage.setItem('user', JSON.stringify(user));
    }

    const handleLogin = () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        for (let i = 0; i < user.length; i++) {
            if (email === user[i].email && password === user[i].password) {
                //save data to local storage for logged in user
                localStorage.setItem('loggedInUser', JSON.stringify(user[i]));
                alert("Login Successful");
                setTimeout(() => { navigate("/")  }, 1000);
                return;
            }
        }
        alert("Login Failed");
    };
    return (
    <div>
        <h1>Login</h1>
        <div>
            <label for="email">Email:</label><br />
            <input type="text" id="email" name="email" /><br />
            <label for="password">Password:</label><br />
            <input type="password" id="password" name="password" /><br />
            <input type="submit" value="Submit" onClick={handleLogin} />
        </div>
        <Link to="/accountCreation">Create Account</Link>
    </div>
 );
}
export default Login;