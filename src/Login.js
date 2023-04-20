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
    

    const handleLogin = () => {
        // console.log("Login");
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        //fetch user data from localhost 3000
        fetch('http://localhost:3000/user/'+email).then((response) => {
            return response.json();
        }).then((data) => {
            // console.log(data);
            user = data;
            //if user data is not empty and password matches, set user as logged in
            if (user.length !== 0 && user[0].pass === password) {
                localStorage.setItem('loggedInUser', JSON.stringify(user[0]));
                setOpen(true);
            }
            else {
                alert("Invalid email or password");
            }
        });

    
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