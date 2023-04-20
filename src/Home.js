import React, { useState,  useEffect } from 'react';
import './index.css';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
function Home() {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        const cart = localStorage.getItem('cart');
        if (cart) {
            setCart(JSON.parse(cart));
            // document.getElementById("sub").innerHTML = cart.length;
            console.log(cart);
        } else {
            setCart([]);
        }
    }, []);



    const addItemToCart = (e, item) => {
        e.preventDefault();
        const cart = localStorage.getItem('cart');
        let cartItems = [];
        if (cart) {
            cartItems = JSON.parse(cart);
            document.getElementById("sub").innerHTML = cartItems.length;
        }
        // check if item is already in cart add quantity instead of adding new item
        const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if (itemInCart) {
            itemInCart.quantity++;
        } else {
            cartItems.push({ ...item, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        document.getElementById("sub").innerHTML = cartItems.length;
        e.target.innerHTML = "Added To Cart"
        setTimeout(() => { e.target.innerHTML = "Add To Cart" }, 2000);
        setCart(cartItems);
    }   




    const store = []


    function clickCard(e, item) {
        e.preventDefault();
        console.log(item.name);
        //Redirect to Description page
        navigate('/description', {
            state: {
                item: item
            }
        }
        );
    }
    

    return (
        <div className="Home">
            {/* nav bar for this react page in jsx without css*/}
            <Navigation id="nav" />
            {/* use store array and print cards to display items from store array */}
            <div className="cardParent">
                {store.map((item) => (
                    <div className="card" key={item.id} >
                        <div id="descriptionDiv" onClick={(e) => { clickCard(e, item); }}>
                            <p>{item.name}</p>
                            <p>{item.discription}</p>
                            <img src={item.image} height={200} width={200} alt={item.name} />
                            <p>$ {item.price}</p>
                        </div>
                        <button id="addItemCart" onClick={(e) => addItemToCart(e, item)}>Add to Cart</button>
                    </div>
                ))}
            </div>


        </div>

    );
}

export default Home;