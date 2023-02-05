import React, { useEffect } from 'react';
import './index.css';
import './Home.css';
import { useLocation } from "react-router-dom";
import Navigation from './Navigation';
import './Description.css';
function Description(props) {
    const location = useLocation();
    console.log("Debug", location.state.item.description);

    const rating = [{
        commentId: 1,
        userId: 101,
        username: "jane_doe",
        productId: 1,
        rating: 4,
        comment: "I love this shirt! It fits well and the material is so soft. I would definitely recommend it.",
        image: location.state.item.image
    },
    {
        commentId: 2,
        userId: 102,
        username: "john_doe",
        productId: 2,
        rating: 3,
        comment: "The shirt is okay, but the sizing is a bit off. I would suggest ordering a size up.",
        image: location.state.item.image
    },
    {
        commentId: 3,
        userId: 103,
        username: "jane_smith",
        productId: 3,
        rating: 5,
        comment: "This dress is amazing! It's so comfortable and the color is just beautiful. I got so many compliments when I wore it.",
        image: location.state.item.image
    }]

    const addComment = () => {
        const comment = document.getElementById('comment').value;
        const rating = document.getElementById('rating').value;
        const image = document.getElementById('file').value;
        const userId = JSON.parse(localStorage.getItem('loggedInUser')).id;

        const newComment = {
            commentId: userId,
            userId: userId,
            username: JSON.parse(localStorage.getItem('loggedInUser')).fName,
            productId: location.state.item.id,
            rating: rating,
            comment: comment,
            image: image
        }
    }


    return (
        <div>
            <Navigation />
            <div className="Home">
                <span>Description</span>
                <div className="description">
                    <div className="descriptionImage">
                        <img src={location.state.item.image} alt="descriptionImage" width={300} height={400} />
                    </div>
                    <div className="descriptionText">
                        <h1>{location.state.item.name}</h1>
                        <p>{location.state.item.description}</p>
                        <p>Description: {location.state.item.detail}</p>
                        <p>Price: {location.state.item.price}</p>
                        <div className='addCommentSection'>
                            <textarea id='commentAdd' className="commentBox" placeholder="Add a review..." required></textarea> <br />
                            <input id="id" className="rating" type="number" min="1" max="5" placeholder="Rating" required></input>/5 <br />
                            <input type="file" id="file" accept="image/*" />
                            <button className="addCommentBtn" onClick={addComment}>Add Comment</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="commentSection">
               
                <div className="comment">
                <h1>Comments</h1>
                    {rating.map((item) => {
                        return (
                            <div className="commentItem">
                                <div className="commentImage">
                                    <img src={item.image} alt="commentImage" width={200} height={200} />
                                </div>
                                <div className="commentText">
                                    <h1>{item.username}</h1>
                                    <p>{item.comment}</p>
                                    <p>{item.rating}/5</p>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>



    );
}

export default Description;