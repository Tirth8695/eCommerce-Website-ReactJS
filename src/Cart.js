import React, { useState } from 'react';
import { useNavigate, useEffect, Link } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import "./Cart.css";
import Navigation from './Navigation';

function Cart(props) {
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const [open, setOpen] = useState(false);
    const [login, setLogin] = useState(null);
    const [cartChange, setCart] = React.useState([]);

    let sum = 0;
    //fetch data of cart from local storage
    const cart = localStorage.getItem('cart');
    let cartItems = [];
    if (cart) {
        cartItems = JSON.parse(cart);
    }


    const handleClose = () => {
        setOpen(false);
    };

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
        let login = JSON.parse(localStorage.getItem('loggedInUser'));
        sum = 0;
        cartItems.map((item) => {
            sum = sum + (item.quantity * item.price);
        });
        setTotal((sum * 0.13) + sum);
        setOpen(true);
        setLogin(login);
    }

    const continueShopping = (e) => {
        e.preventDefault();
        localStorage.removeItem('cart');
        navigate('/');
    }
    return (
        <div className="Home">
           
            <Navigation />
            <div id="CartDiv">
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
            {/* <div>
                <span id='checkTitle'></span>
                <p>Total: {total.toFixed(2)}</p>
            </div> */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <div className="modal-size">
                    {(() => {
                        if (login) {
                            return (
                                <div id="checkOutDiv">
                                    <h3>Thank you for shopping with us, {login.fName}</h3>
                                    <p>Order will be delivered in 3-5 business days</p>
                                    <p>Order details will be sent to your email</p>
                                    <p>Order number: {Math.floor(Math.random() * 1000000000)}</p>
                                    <p>Order date: {new Date().toLocaleDateString()}</p>
                                    <p>Order total: {total.toFixed(2)}</p>
                                    <p>Order will be delivered to:  {login.address}</p>
                                    <p>Total: {total.toFixed(2)}</p>
                                    <button onClick={continueShopping}>Continue Shopping</button>
                                </div>
                            )
                        } else {
                            return (
                                <div id="checkOutDiv">
                                    <h3>Thank you for shopping with us</h3>
                                    <input type="email" placeholder="example@example.com" /> <br />
                                    <textarea placeholder="Enter your address"></textarea> <br />
                                    <sub>This data will not be stored</sub>
                                    <p>Order will be delivered in 3-5 business days</p>
                                    <p>Order details will be sent to your email</p>
                                    <p>Order number: {Math.floor(Math.random() * 1000000000)}</p>
                                    <p>Order date: {new Date().toLocaleDateString()}</p>
                                    <p>Order total: {total.toFixed(2)}</p>
                                    <p>Total: {total.toFixed(2)}</p>
                                    <button onClick={continueShopping}>Continue Shopping</button>
                                </div>
                            )
                        }
                    })()}
                </div>
            </Modal>
            </div>
          
        </div>
    );
}
export default Cart;