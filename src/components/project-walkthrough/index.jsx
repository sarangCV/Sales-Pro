import React from 'react';
import './style.css'

const WalkthroughCard = ({video}) => {
    return (
        <div className="gallery-card video-sec">
            <video src={video} controls="controls" autoplay="true"/>
        </div>
    )
}

export default WalkthroughCard;
