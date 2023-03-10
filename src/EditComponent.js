import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Navigation from './Navigation';
import "./EditComponent.css"
import { Snackbar, SnackbarContent } from '@material-ui/core';

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

    const [open, setOpen] = useState(false);

    const handleEdit = (e) => {
        //edit current loggedin user info
        e.preventDefault();
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
            setOpen(true);

            return;
        }
    };
    return (
        <div>
            <Navigation />
            <div id='parentEditDiv'>
                <h1 className="editpageH1" >Edit Profile</h1> <br />
                {/* write all fields in table */}
                <table className="editprofileTable">
                    <tr>
                        <td>Email</td>
                        <td><input type="text" id="email" disabled /></td>
                    </tr>
                    <tr>
                        <td>First Name</td>
                        <td><input type="text" id="fName" /></td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td><input type="text" id="lName" /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" id="password" /></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td><input type="text" id="address" /></td>
                    </tr>
                </table>
                <br />
                <br />
                <div id='submitParent'>
                    <button type="submit" id="editprofileBtn" value="Submit" onClick={handleEdit}>Update</button>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                ContentProps={{
                    sx: {
                        background: "red"
                    }
                }}
                open={open}
                message="Edit Successful"
                key={'bottom' + 'left'}
                onClose={() => { navigate("/") }}
                color="success"
                autoHideDuration={1000}
            >
                <SnackbarContent style={{
                    backgroundColor: "#c67a6f",
                }}
                    message="Edit Successful"
                />
            </Snackbar>

        </div>
    );
};

export default EditComponent;