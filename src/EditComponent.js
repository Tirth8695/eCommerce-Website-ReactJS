import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

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
        },[]);
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
                setTimeout(() => { navigate("/")  }, 1000);
                return;
            }
        };
        return (
            <div>
                <h1>Edit</h1>
                <div>
                <label for="email">Email:</label><br />
                    <input type="text" id="email" name="email" disabled/><br />
                    <label for="fName">First Name:</label><br />
                    <input type="text" id="fName" name="fName" /><br />
                    <label for="lName">Last Name:</label><br />
                    <input type="text" id="lName" name="lName" /><br />
                    <label for="password">Password:</label><br />
                    <input type="password" id="password" name="password" /><br />
                    <label for="address">Address:</label><br />
                    <input type="text" id="address" name="address" /><br />
                    <input type="submit" value="Submit" onClick={handleEdit} />
                </div>
            </div>
        );
};

export default EditComponent;