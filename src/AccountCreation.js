import { Link } from "react-router-dom";

//accoutn creation page
const AccountCreation = () => {

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
        if (user !== null) {
            if (user.email === email) {
                alert("Email already exists");
                return;
            }
            //check all fields are filled
            if (fname === "" || lname === "" || email === "" || password === "" || confirmPassword === "" || address === "") {
                alert("Please fill all fields");
                return;
            }
            const user = {
                fname: fname,
                lname: lname,
                email: email,
                password: password,
                address: address
            };
            localStorage.setItem("user", JSON.stringify(user));
            alert("Account Created");
        }
        
    };


    return (
        <div className="accountCreation">
            <h1>Account Creation</h1>
            <div>
                <label for="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" /><br />
                <label for="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" /><br />
                <label for="email">Email:</label><br />
                <input type="text" id="email" name="email" /><br />
                <label for="password">Password:</label><br />
                <input type="text" id="password" name="password" /><br />
                <label for="confirmPassword">Confirm Password:</label><br />
                <input type="text" id="confirmPassword" name="confirmPassword" /><br />
                <textarea id="address" name="address" rows="4" cols="50"/>
                <input type="submit" value="Submit" onClick={handleRegister} />
            </div>
            <Link to="/login">Login</Link>
        </div>

    );
}
export default AccountCreation;