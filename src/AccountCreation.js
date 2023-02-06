import { Link, useNavigate } from "react-router-dom";
import "./AccountCreation.css"

//accoutn creation page
const AccountCreation = () => {

    const navigate = useNavigate();

    const handleRegister = () => {
        const fname = document.getElementById("fname").value;
        const lname = document.getElementById("lname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const address = document.getElementById("address").value;
        if (password !== confirmPassword) {
            alert("Password does not match");
            return;
        }
        //check if email already exists
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);
        if (user !== null) {

            for (let i = 0; i < user.length; i++) {
                if (email === user[i].email) {
                    console.log("email already exists");
                    alert("Email already exists");
                    return;
                }
            }
            //check all fields are filled
            if (fname === "" || lname === "" || email === "" || password === "" || confirmPassword === "" || address === "") {
                alert("Please fill all fields");
                return;
            }
            const userData = {
                fName: fname,
                lName: lname,
                email: email,
                password: password,
                address: address
            };
            user.push(userData);
            localStorage.setItem("user", JSON.stringify(user));
            alert("Account Created");
            setTimeout(() => { navigate("/login") }, 1000);
        }

    };


    return (
        <div className="accountCreation">
            <h1>Account Creation</h1>
            <div className="createAcc">
                <input type="text" id="fname" name="fname" placeholder="First Name" /><br />
                <input type="text" id="lname" name="lname" placeholder="Last Name" /><br />
                <input type="text" id="email" name="email" placeholder="Email" /><br />
                <input type="text" id="password" name="password" placeholder="Password" /><br />
                <input type="text" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" /><br />
                <input type="text" id="address" name="address" placeholder="Address" /><br />
                <button type="submit" id="accSubmit" onClick={handleRegister}>Submit</button>
            </div>
            <Link to="/login">Login</Link>
        </div>

    );
}
export default AccountCreation;