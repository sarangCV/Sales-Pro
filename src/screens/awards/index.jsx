import React from 'react';
import Carousel from 'react-elastic-carousel';
import GalleryCard from '../../components/project-gallery';
import Navbar from '../../components/navbar';
// importing images
import award_one from '../../assets/awards/1.jpeg';
import award_two from '../../assets/awards/2.jpeg'
import award_three from '../../assets/awards/3.jpeg'
import award_four from '../../assets/awards/4.jpg'

import BackHandler from '../../components/back-handler';
// import './style.css';

const Awards = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1200, itemsToShow: 2, itemsToScroll: 2}
      ];

    return (
        <>
            <Navbar title="PROJECT GALLERY"/>
            <div className="container-sec">
                {/* <div className="container"> */}
                    <div className="border-sec border-sec-gallery">
                        <BackHandler/>
                        <h1 className="gallery-title">Awards & Achievements</h1>
                        <div className="dashboard-carousel dashboard-carousel-gallery">
                            <Carousel breakPoints={breakPoints}>
                                <GalleryCard image={award_one}/>
                                <GalleryCard image={award_two}/>
                                <GalleryCard image={award_three}/>
                                <GalleryCard image={award_four}/>
                            </Carousel>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Awards;
