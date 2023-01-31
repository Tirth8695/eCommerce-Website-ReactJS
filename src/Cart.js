
import React from 'react';
import './Cart.css';
import { useLocation } from "react-router-dom";

function Cart(props) {
    const location = useLocation();
  
    return (
        <div className="Home">
            <span>Cart: {location.state.test}</span>
        </div>
        
    );
}
export default Cart;