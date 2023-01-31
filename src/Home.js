import React, { useState } from 'react';
import './index.css';
import './Home.css';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useNavigate } from 'react-router-dom';
import Description from './Description';
//Redirect 
import { Navigate } from 'react-router-dom';
import Navigation from './Navigation';
function Home() {
    const navigate = useNavigate();



    let store = [
        {
            id: 0,
            name: "T-shirt",
            discription: "This is our best seller for a reason. Relaxed, tailored and ultra-comfortable, you'll love the way you look in this durable, reliable classic.",
            image: "https://i.ibb.co/QCXwfTL/removal-ai-tmp-634eb4ebea086.png",
            price: 12.99
        },
        {
            id: 1,
            name: "Jacket",
            discription: "Men's Winter Jacket Military Warm Fleece Coat with Detachable Hooded Outwear",
            image: "https://i.ibb.co/1JmRvDS/1738031-010-f-transformed.webp",
            price: 80.00
        },
        {
            id: 2,
            name: "Caps",
            discription: "Floral Print Baseball Cap",
            image: "https://i.ibb.co/PM30QBH/removal-ai-tmp-634eb3b259fb4.png",
            price: 3.00
        },
        {
            id: 3,
            name: "Shoes",
            discription: "PUMA Smash v2 Sneakers",
            image: "https://i.ibb.co/QYJNHVb/puma-transformed.webp",
            price: 50.00
        },
        {
            id: 4,
            name: "Sweatshirt",
            discription: "Gildan Men’s Fleece Crewneck Sweatshirt, Style G18000",
            image: "https://i.ibb.co/1QBCT2h/sweatshirt-removebg-preview.png",
            price: 20.00
        },
        {
            id: 5,
            name: "Pants",
            discription: "PUMA Men's Essentials T7 Track Pants",
            image: "https://i.ibb.co/Mh778c2/pants-transformed.webp",
            price: 16.50
        },
        {
            id: 6,
            name: "Socks",
            discription: "Woolen Socks for women",
            image: "https://i.ibb.co/kMnDKjX/socks-transformed.webp",
            price: 5.00
        },
        {
            id: 7,
            name: "Tank Top",
            discription: "Classic print tank top",
            image: "https://i.ibb.co/B43XBpk/tanktop-transformed.webp",
            price: 28.99
        },
        {
            id: 8,
            name: "Snow Shoes",
            discription: "Icecap snow shoes UNISEX",
            image: "https://i.ibb.co/KxW96V2/snow-transformed.webp",
            price: 50.00
        },
        {
            id: 9,
            name: "Shorts",
            discription: "Cotton Shorts for men",
            image: "https://i.ibb.co/N6zvfF0/shorts.png",
            price: 18.00
        },
        {
            id: 10,
            name: "Flip Flops",
            discription: "Beach flip flops",
            image: "https://i.ibb.co/RCHGHhF/flipflops-transformed.webp",
            price: 18.00
        },
        {
            id: 11,
            name: "Sweatshirt",
            discription: "Adidas sports sweatshirt for men",
            image: "https://i.ibb.co/1QBCT2h/sweatshirt-removebg-preview.png",
            price: 20.00
        }
    ]


    function clickCard(e, item) {
        e.preventDefault();
        console.log(item.name);
        //Redirect to Description page
        navigate('/description', {
            state: {
                test: "test"
            }
        }
        );
    }
    var cartQuantity = 0;
    function handleClick(e) {
        e.preventDefault();
        
        cartQuantity++;
        document.getElementById("sub").innerHTML = cartQuantity;

     }

    return (
        <div className="Home">
            {/* nav bar for this react page in jsx without css*/}
            <Navigation id="nav" />
            {/* use store array and print cards to display items from store array */}
            <div className="cardParent">
                {store.map((item) => (
                    <div className="card" key={item.id} >
                        <div onClick={(e) => { clickCard(e, item); }}>
                            <p>{item.name}</p>
                            <p>{item.discription}</p>
                            <img src={item.image} height={200} width={200} alt={item.name} />
                            <p>{item.price}</p>
                        </div>
                        <button onClick={handleClick}>Add to Cart</button>
                    </div>
                ))}
            </div>


        </div>

    );
}

export default Home;