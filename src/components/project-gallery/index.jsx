import React from 'react';
import './style.css'

const GalleryCard = ({image}) => {
    return (
        <div className="gallery-card">
            <img src={image}/>
        </div>
    )
}

export default GalleryCard;
