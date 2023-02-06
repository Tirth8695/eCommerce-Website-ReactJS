import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Navigation from './Navigation';
import "./EditComponent.css"

const EditComponent = () => {
    useEffect(() => {
        //edit current loggedin user info
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (user) {
            document.getElementById("fName").value = user.fName;
            document.getElementById("lName").value = user.lName;
            document.getElementById("email").value = user.email;
            document.getElementById("password").value = user.password;
            document.getElementById("address").value = user.address;
        }
    }, []);
    const navigate = useNavigate();
    const handleEdit = () => {
        //edit current loggedin user info
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (user) {
            user.fName = document.getElementById("fName").value;
            user.lName = document.getElementById("lName").value;
            user.password = document.getElementById("password").value;
            user.address = document.getElementById("address").value;
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            //also update user data in local storage
            const userData = JSON.parse(localStorage.getItem('user'));
            userData.map((item, index) => {
                if (item.email === user.email) {
                    userData[index] = user;
                }
            });
            localStorage.setItem('user', JSON.stringify(userData));
            alert("Edit Successful");
            setTimeout(() => { navigate("/") }, 1000);
            return;
        }
    };
    return (
        <div >
            <Navigation />
            <div className="edit-profile">
                <h1 className="editpageH1">Edit</h1>
                <div className="editprofileContent">
                    <label for="email">Email:</label>
                    <input type="text" placeholder="First Name" id="email" name="email" disabled /><br /><br />
                    <label for="fName">First Name:</label>
                    <input type="text" id="fName" name="fName" /><br /><br />
                    <label for="lName">Last Name:</label>
                    <input type="text" id="lName" name="lName" /><br /><br />
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" /><br /><br />
                    <label for="address">Address:</label>
                    <input type="text" id="address" name="address" /><br /><br />
                    <button type="submit" id="editprofilebtn" value="Submit" onClick={handleEdit} ></button>
                </div>
            </div>
        </div>
    );
};

export default EditComponent;