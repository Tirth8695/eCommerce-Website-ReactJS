import React, {useEffect} from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";

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
      console.log(user);
      document.getElementById("login").innerHTML = "Hello, " + user.fName;
    } else {
      document.getElementById("login").innerHTML = "Login";
      document.getElementById("logout").style.display = "none";
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
      <nav>
                <ul>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Login" id="login">Login</a></li>
                    <li id="logout"><a style={{color:"#0000e4"}}onClick={handleLogout}>Logout</a></li>
                    <ShoppingCartIcon onClick={handleCartOpen}/><sub id="sub"></sub>
                </ul>
            </nav>
    </div>
  );
}

export default Navigation;