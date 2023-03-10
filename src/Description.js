import React, { useEffect, useState } from 'react';
import './index.css';
import './Home.css';
import { useLocation } from "react-router-dom";
import Navigation from './Navigation';
import './Description.css';
import { Snackbar, SnackbarContent } from '@material-ui/core';
function Description(props) {
    const location = useLocation();
    console.log("Debug", location.state.item.description);

    const [comments, setComments] = useState([]);
    const [imageURL, setImage] = useState(null);
    const [open, setOpen] = useState(false);
    var userId = 104;
    var commentId = 4;
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

    useEffect(() => {
        setComments(rating);
    }, []);

    const addComment = (e) => {
        e.preventDefault();
        console.log("add comment");
        const comment = document.getElementById('commentAdd').value;
        const ratingValue = document.getElementById('ratingInput').value;

        const newComment = {
            commentId: commentId++,
            userId: userId++,
            username: JSON.parse(localStorage.getItem('loggedInUser')).fName,
            productId: location.state.item.id,
            rating: ratingValue,
            comment: comment,
            image: imageURL
        }
        var newRating = [...rating, newComment];
        setComments(newRating);
        setOpen(true);
    }

    const handleChange = (e) => {
        const file = URL.createObjectURL(e.target.files[0]);
        setImage(file);
    };


    return (
        <div>
            <Navigation />
            <div className="Home">
                <span>Description</span>
                <div className="description">
                    <div className="descriptionImage">
                        <img src={location.state.item.image} alt="descriptionImage" id="descriptionImg" />
                    </div>
                    <div className="descriptionText">
                        <h1>{location.state.item.name}</h1>
                        <p>{location.state.item.description}</p>
                        <p>Description: {location.state.item.detail}</p>
                        <p>Price: {location.state.item.price}</p>
                        <div className='addCommentSection'>
                            <h3 style={{ color: "white" }}>Write a review</h3>
                            <textarea id='commentAdd' className="commentBox" placeholder="Add a review..." required /> <br />
                            <input id="ratingInput" className="rating" type="number" min="1" max="5" placeholder="Rating" required />/5 <br />
                            <input onChange={handleChange} type="file" id="file" accept="image/*" />
                            <button className="addCommentBtn" onClick={addComment}>Add Review</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="commentSection">

                <div className="comment">
                    <h1 id="reviewsTag">Reviews</h1>
                    {comments.map((item) => {
                        return (
                            <div className="commentItem" key={item.commentId}>
                                <div className="commentDiv">
                                    <div className="commentImage">
                                        <img src={item.image} alt="commentImage" width={200} height={200} />
                                    </div>
                                    <div className="commentText">
                                        <h1>{item.username}</h1>
                                        <p>{item.comment}</p>
                                        <p>{item.rating}/5</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                ContentProps={{
                    sx: {
                        background: "red"
                    }
                }}
                open={open}
                message="Comment Added"
                key={'bottom' + 'left'}
                autoHideDuration={1000}
                onClose={() => setOpen(false)}
                action={
                    <React.Fragment>
                        <button onClick={() => setOpen(false)}>Close</button>
                    </React.Fragment>
                }
            >
                <SnackbarContent style={{
                    backgroundColor: "#c67a6f",
                }}
                    message="Comment Added"
                />
            </Snackbar>
        </div>



    );
}

export default Description;