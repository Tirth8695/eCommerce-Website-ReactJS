
import React, { useState } from 'react';
// import './Cart.css';
import { useLocation, useEffect } from "react-router-dom";
import Navigation from './Navigation';

function Cart(props) {
    const location = useLocation();
    const [cartChange, setCart] = React.useState([]);
    const [login, setLogin] = useState("");
    const [total, setTotal] = useState(0);
    var sum = 0;
    //fetch data of cart from local storage
    const cart = localStorage.getItem('cart');
    let cartItems = [];
    if (cart) {
        cartItems = JSON.parse(cart);
    }

    const removeCartItem = (e, item) => {
        e.preventDefault();

        const cart = localStorage.getItem('cart');
        let cartItems = [];
        if (cart) {
            cartItems = JSON.parse(cart);
        }
        const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        console.log(itemInCart.quantity);
        console.log(item.quantity);
        if (itemInCart && itemInCart.quantity >= 2) {
            itemInCart.quantity--;
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        setCart(cartItems);
    }

    const addCartItem = (e, item) => {
        e.preventDefault();
        const cart = localStorage.getItem('cart');
        let cartItems = [];
        if (cart) {
            cartItems = JSON.parse(cart);
        }
        const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if (itemInCart) {
            itemInCart.quantity++;
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        setCart(cartItems);

    }

    const removeItemFromCart = (e, item) => {
        e.preventDefault();
        const cart = localStorage.getItem('cart');
        let cartItems = [];
        //delete item from cart
        if (cart) {
            cartItems = JSON.parse(cart);
            const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
            if (itemInCart) {
                cartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
            }
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        setCart(cartItems);

    }

    const handleCheckout = (e) => {
        e.preventDefault();
        sum = 0;
        cartItems.map((item) => {
            sum = sum + (item.quantity * item.price);
        });
        setTotal((sum * 0.13) + sum);
    }

    return (
        <div className="Home">
            <Navigation />
            <span>Cart</span>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Total</th>
                        <td></td>
                        <td>Quantity</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity * item.price}</td>
                            <td><button onClick={(e) => removeCartItem(e, item)}>-</button></td>
                            <td>{item.quantity}</td>
                            <td><button onClick={(e) => addCartItem(e, item)}>+</button></td>
                            <td><button onClick={(e) => removeItemFromCart(e, item)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleCheckout}>CheckOut</button>
            <div>
                <span id='checkTitle'></span>
                <p>Total: {total.toFixed(2)}</p>
            </div>
        </div>
    );
}
export default Cart;