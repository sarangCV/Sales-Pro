import React from 'react';
import './style.css'

const FloorSingle = ({title, onClick, img}) => {
    return (
        <div className="single-floor">
           <img src={img} alt="img" />
        </div>
    )
}

export default FloorSingle;
