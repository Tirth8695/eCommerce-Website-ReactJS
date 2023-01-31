import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Navigation() {
  return (
    <div>
      <nav>
                <ul>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Login">Login</a></li>
                    <li><a href="Logout">Logout</a></li>
          <ShoppingCartIcon /><sub id="sub"></sub>
                </ul>
            </nav>
    </div>
  );
}

export default Navigation;