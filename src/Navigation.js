import React, {useEffect} from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
  const navigate = useNavigate();
  const handleCartOpen = () => {
    navigate("/cart");
  }

  useEffect(() => {
    //fetch loggedin user from local storage
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    //change login button to "hello, {name}" if user is logged in
    if (user) {
      document.getElementById("login").innerHTML = "Hello, " + user.fName;
    } else {
      document.getElementById("login").innerHTML = "Login";
      document.getElementById("logout").style.display = "none";
      document.getElementById("edit").style.display = "none";
    }
  });

  const handleLogout = () => {
    //remove logged in user from local storage
    localStorage.removeItem('loggedInUser');
    //change login button to "login"
    document.getElementById("login").innerHTML = "Login";
    document.getElementById("logout").style.display = "none";
    navigate("/");
  };

  return (
    <div>
      <nav id="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="Login" id="login">Login</a></li>
                    <li id="edit"><a href="Edit">Edit Profile</a></li>
                    <li id="logout"><a style={{color:"#0000e4", cursor:"pointer"}}onClick={handleLogout}><u>Logout</u></a></li>
                    <div id="cartIcon"><ShoppingCartIcon onClick={handleCartOpen} style={{cursor:"pointer"}}/></div><sub id="sub"></sub>
                </ul>
            </nav>
    </div>
  );
}

export default Navigation;