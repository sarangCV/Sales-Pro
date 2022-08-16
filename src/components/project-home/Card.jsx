import React from 'react';
import './style.css'

const Card = ({img, title, onClick}) => {
    return (
        <div className="card-project-home" onClick={onClick}>
            <div className="card-project-home-img-container">
                <img src={img} alt="gallery" />
            </div>
            <h3>{title}</h3>
        </div>
    )
}

export default Card
