import React from 'react';
import Carousel from 'react-elastic-carousel';
import GalleryCard from '../../components/project-gallery';
import Navbar from '../../components/navbar';
// importing images
import gallery_one from '../../assets/project-gallery/1.jpg';
import gallery_two from '../../assets/project-gallery/2.jpg'
import gallery_three from '../../assets/project-gallery/3.jpg'
import gallery_four from '../../assets/project-gallery/4.jpg'
import gallery_five from '../../assets/project-gallery/5.jpg'
import gallery_six from '../../assets/project-gallery/6.jpg'
import gallery_seven from '../../assets/project-gallery/7.jpg'
import gallery_eight from '../../assets/project-gallery/8.jpg'
import gallery_nine from '../../assets/project-gallery/9.jpg'
import gallery_ten from '../../assets/project-gallery/10.jpg'
import gallery_eleven from '../../assets/project-gallery/11.jpg'
import gallery_twelve from '../../assets/project-gallery/12.jpg'
import gallery_thirteen from '../../assets/project-gallery/13.jpg'

import './style.css';
import BackHandler from '../../components/back-handler';

const ProjectGallery = () => {
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
                        <h1 className="gallery-title">Gallery</h1>
                        <div className="dashboard-carousel dashboard-carousel-gallery">
                            <Carousel breakPoints={breakPoints}>
                                <GalleryCard image={gallery_one}/>
                                <GalleryCard image={gallery_two}/>
                                <GalleryCard image={gallery_three}/>
                                <GalleryCard image={gallery_four}/>
                                <GalleryCard image={gallery_five}/>
                                <GalleryCard image={gallery_six}/>
                                <GalleryCard image={gallery_seven}/>
                                <GalleryCard image={gallery_eight}/>
                                <GalleryCard image={gallery_nine}/>
                                <GalleryCard image={gallery_ten}/>
                                <GalleryCard image={gallery_eleven}/>
                                <GalleryCard image={gallery_twelve}/>
                                <GalleryCard image={gallery_thirteen}/>
                            </Carousel>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default ProjectGallery;
