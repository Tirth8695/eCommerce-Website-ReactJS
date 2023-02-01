import React from 'react';
import './index.css';
import './Home.css';
import { useLocation } from "react-router-dom";
import Navigation from './Navigation';

function Description(props) {
    const location = useLocation();
    console.log("Debug",location.state.item.description);

    const rating = [  {    
        commentId: 1,    
        userId: 101,    
        username: "jane_doe",    
        productId: 1,    
        rating: 4,    
        comment: "I love this shirt! It fits well and the material is so soft. I would definitely recommend it.",    
        image: location.state.item.image  },  
        {    
        commentId: 2,    
        userId: 102,    
        username: "john_doe",    
        productId: 2,    
        rating: 3,    
        comment: "The shirt is okay, but the sizing is a bit off. I would suggest ordering a size up.",    
        image: location.state.item.image  },  
        {    
        commentId: 3,    
        userId: 103,    
        username: "jane_smith",    
        productId: 3,    
        rating: 5,    
        comment: "This dress is amazing! It's so comfortable and the color is just beautiful. I got so many compliments when I wore it.",    
        image: location.state.item.image  }]

  
    return (
        <div>
        <Navigation />
            <div className="Home">
                <span>Description</span>
                <div className="description">
                    <div className="descriptionImage">
                        <img src={location.state.item.image} alt="descriptionImage" />
                    </div>
                    <div className="descriptionText">
                        <h1>{location.state.item.name}</h1>
                        <p>{location.state.item.description}</p>
                        <p>Description: {location.state.item.detail}</p>
                        <p>Price: {location.state.item.price}</p>
                    </div>
                </div>
            </div>
            <div className="commentSection">
                <h1>Comments</h1>
                <div className="comment">
                   { rating.map((item) => {
                        return (
                            <div className="commentItem">
                                <div className="commentImage">
                                    <img src={item.image} alt="commentImage" />
                                    </div>
                                    <div className="commentText">
                                        <h1>{item.username}</h1>
                                        <p>{item.comment}</p>
                                        <p>{item.rating}/5</p>
                                        </div>
                                        </div>
                        )
                   }
                   )};
                </div>
                </div>
                </div>
        
       
        
    );
}

export default Description;