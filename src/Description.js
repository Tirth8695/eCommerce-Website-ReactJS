import React from 'react';
import './index.css';
import './Home.css';
import { useLocation } from "react-router-dom";

function Description(props) {
    const location = useLocation();
    console.log(11,location.state.test);
  
    return (
        <div className="Home">
            <span>Description: {location.state.test}</span>
        </div>
        
    );
}

export default Description;