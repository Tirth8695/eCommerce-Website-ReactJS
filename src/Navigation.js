import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const handleCartOpen = () => {
    navigate("/cart");
  }
  return (
    <div>
      <nav>
                <ul>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Login">Login</a></li>
                    <li><a href="Logout">Logout</a></li>
          <ShoppingCartIcon onClick={handleCartOpen}/><sub id="sub"></sub>
                </ul>
            </nav>
    </div>
  );
}

export default Navigation;