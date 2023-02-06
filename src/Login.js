// login page
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Login.css'
import { Snackbar, SnackbarContent } from '@material-ui/core';

const Login = () => {
    const navigate = useNavigate();
    //fetch user data from local storage
    const userData = localStorage.getItem('user');
    //fetch logged in user data from local storage
    const loggedInUser = localStorage.getItem('loggedInUser');
    const [open, setOpen] = useState(false);
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
                setOpen(true);
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
        <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                ContentProps={{
                    sx: {
                        background: "red"
                    }
                }}
                open={open}
                message="Login Successful"
                key={'bottom' + 'left'}
                onClose={() => { navigate("/") }}
                color="success"
                autoHideDuration={1000}
            >
                <SnackbarContent style={{
                    backgroundColor: "#c67a6f",
                }}
                    message="Login Successful"
                />
            </Snackbar>
    </div>
 );
}
export default Login;