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




    const store = [
        {
            id: 0,
            name: "T-shirt",
            description: "This is our best seller for a reason. Relaxed, tailored and ultra-comfortable, you'll love the way you look in this durable, reliable classic.",
            detail: "Stay comfortable and stylish in this women's t-shirt. Made from a soft blend of cotton and polyester, this t-shirt features a classic fit with a round neckline and short sleeves. Available in a variety of colors, this t-shirt is perfect for everyday wear, whether dressed up or down. Machine washable for easy care, this t-shirt is a must-have addition to any wardrobe.",
            image: "https://i.ibb.co/QCXwfTL/removal-ai-tmp-634eb4ebea086.png",
            price: 12.99
        },
        {
            id: 1,
            name: "Jacket",
            description: "Men's Winter Jacket Military Warm Fleece Coat with Detachable Hooded Outwear",
            detail: "Stay warm and stylish this winter season with this men's fleece jacket. Featuring a detachable hood and made from a warm, soft fleece material, this jacket is perfect for layering during the colder months. The military-inspired design adds a rugged touch to your outfit. Available in a variety of colors, this jacket is a must-have for your winter wardrobe.",
            image: "https://i.ibb.co/1JmRvDS/1738031-010-f-transformed.webp",
            price: 80.00
        },
        {
            id: 2,
            name: "Caps",
            description: "Floral Print Baseball Cap",
            detail: "Add a touch of fun to your outfit with this floral print baseball cap. Made from a comfortable and lightweight material, this cap features an adjustable strap for a perfect fit. The eye-catching floral print adds a pop of color to your outfit, making it perfect for casual outings or trips to the beach. Machine washable for easy care, this cap is a must-have accessory.",
            image: "https://i.ibb.co/PM30QBH/removal-ai-tmp-634eb3b259fb4.png",
            price: 3.00
        },
        {
            id: 3,
            name: "Shoes",
            description: "PUMA Smash v2 Sneakers",
            detail: "Step up your style game with these PUMA Smash v2 sneakers. Featuring a sleek and modern design, these sneakers are perfect for casual or athletic wear. The comfortable padded interior and durable sole ensure all-day comfort and support. Available in a variety of colors, these sneakers are a must-have for your shoe collection.",
            image: "https://i.ibb.co/QYJNHVb/puma-transformed.webp",
            price: 50.00
        },
        {
            id: 4,
            name: "Sweatshirt",
            description: "Gildan Men’s Fleece Crewneck Sweatshirt, Style G18000",
            detail: "This sweatshirt is made of soft and comfortable fabric that is perfect for everyday wear. The classic fit and ribbed cuffs and hem make it a timeless addition to your wardrobe. The versatile color options allow you to mix and match with ease, while the crewneck design adds a touch of casual style. Ideal for lounging at home, running errands, or layering under jackets, this sweatshirt is a must-have for any wardrobe.",
            image: "https://i.ibb.co/1QBCT2h/sweatshirt-removebg-preview.png",
            price: 20.00
        },
        {
            id: 5,
            name: "Pants",
            description: "PUMA Men's Essentials T7 Track Pants",
            detail: "These pants are made of a soft and durable cotton blend material that provides both comfort and longevity. The classic fit design features a straight leg and a mid-rise waist for a timeless look that can be dressed up or down. With five pockets, including two front pockets, two back pockets, and a convenient coin pocket, these pants have ample storage for all of your essentials. Available in a variety of colors, these pants are the perfect addition to any wardrobe for effortless style and comfort.",
            image: "https://i.ibb.co/Mh778c2/pants-transformed.webp",
            price: 16.50
        },
        {
            id: 6,
            name: "Socks",
            description: "Woolen Socks for women",
            detail: "These socks are made from high-quality, soft and durable material that provides comfort and warmth all day long. The ribbed design ensures a secure and snug fit while the reinforced heel and toe offer added durability. These socks are perfect for everyday wear, outdoor activities, or even for lounging around the house. Available in a variety of sizes and colors, these socks are an essential for any wardrobe.",
            image: "https://i.ibb.co/kMnDKjX/socks-transformed.webp",
            price: 5.00
        },
        {
            id: 7,
            name: "Tank Top",
            description: "Classic print tank top",
            detail: "This tank top is made from a soft and comfortable cotton blend material that is perfect for everyday wear. The classic fit design features a scoop neck and a straight hem for a timeless look that can be dressed up or down. Available in a variety of colors, this tank top is the perfect addition to any wardrobe for effortless style and comfort.",
            image: "https://i.ibb.co/B43XBpk/tanktop-transformed.webp",
            price: 28.99
        },
        {
            id: 8,
            name: "Snow Shoes",
            description: "Icecap snow shoes UNISEX",
            detail: "These snow shoes are made from a durable and lightweight material that provides comfort and support. The classic design features a lace-up closure for a secure and snug fit. The rubber sole provides traction and stability on slippery surfaces. Available in a variety of colors, these snow shoes are the perfect addition to any wardrobe for effortless style and comfort.",
            image: "https://i.ibb.co/KxW96V2/snow-transformed.webp",
            price: 50.00
        },
        {
            id: 9,
            name: "Shorts",
            description: "Cotton Shorts for men",
            detail: "These shorts are made from a soft and comfortable cotton blend material that is perfect for everyday wear. The classic fit design features a straight leg and a mid-rise waist for a timeless look that can be dressed up or down. Available in a variety of colors, these shorts are the perfect addition to any wardrobe for effortless style and comfort.",
            image: "https://i.ibb.co/N6zvfF0/shorts.png",
            price: 18.00
        },
        {
            id: 10,
            name: "Flip Flops",
            description: "Beach flip flops",
            detail: "These flip flops are made from a soft and comfortable material that is perfect for everyday wear. The classic design features a thong strap for a secure and snug fit. The rubber sole provides traction and stability on slippery surfaces. Available in a variety of colors, these flip flops are the perfect addition to any wardrobe for effortless style and comfort.",
            image: "https://i.ibb.co/RCHGHhF/flipflops-transformed.webp",
            price: 18.00
        },
        {
            id: 11,
            name: "Sweatshirt",
            description: "Adidas sports sweatshirt for men",
            detail: "This sweatshirt is made of soft and comfortable fabric that is perfect for everyday wear. The classic fit and ribbed cuffs and hem make it a timeless addition to your wardrobe. The versatile color options allow you to mix and match with ease, while the crewneck design adds a touch of casual style. Ideal for lounging at home, running errands, or layering under jackets, this sweatshirt is a must-have for any wardrobe.",
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
                item: item
            }
        }
        );
    }
    
    function handleClick(e) {
        e.preventDefault();

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
                        <button id="addItemCart" onClick={(e) => addItemToCart(e, item)}>Add to Cart</button>
                    </div>
                ))}
            </div>


        </div>

    );
}

export default Home;