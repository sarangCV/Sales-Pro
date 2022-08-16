import React from 'react';
import './style.css'

const FloorPlanCard = ({title, onClick}) => {
    return (
        <div className="floor-plan-card" onClick={onClick}>
           <h3>{title}</h3>
        </div>
    )
}

export default FloorPlanCard;
