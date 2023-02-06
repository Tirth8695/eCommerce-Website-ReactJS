// login page
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    //fetch user data from local storage
    const userData = localStorage.getItem('user');
    //fetch logged in user data from local storage
    const loggedInUser = localStorage.getItem('loggedInUser');
    //if user is logged in, redirect to home page
    useEffect(() => {
        if (loggedInUser) {
            navigate("/");
        }
    },[]);
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
     <div className='loginScreen'>
        <div className='login'>
        <h1>Login</h1>
            <div className='loginInput'>
                <input type="text" id="email" name="email" placeholder='Email' />
                <input type="password" id="password" name="password" placeholder='Password'/><br />
            </div>
            <input type="submit" id='submit' value="Submit" onClick={handleLogin} />
            <Link to="/accountCreation">Create Account</Link>
        </div>
        
    </div>
 );
}
export default Login;