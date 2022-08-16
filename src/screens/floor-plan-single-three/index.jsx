import React, { useRef, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import Card from '../../components/project-floor-plan';
import GalleryCard from '../../components/project-gallery';
import Navbar from '../../components/navbar';

import img1 from '../../assets/project-floor-plan/2BHK.jpg';
import img2 from '../../assets/project-floor-plan/2.png';
import img3 from '../../assets/project-floor-plan/4BHK.jpg';


import FloorSingle from '../../components/project-floor-single/FloorSingle';
import BackHandler from '../../components/back-handler';
import { download_white, send_white } from '../../assets/icons';
import './style.css';

const FloorPlanSingle = () => {

    const [currentImg, setCurrentImg] = useState(img1)

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1200, itemsToShow: 3, itemsToScroll: 2}
      ];

    return (
        <>
            <Navbar title="PROJECT FLOOR PLAN"/>
            <div className="container-sec">
                {/* <div className="container"> */}
                <div className="border-sec">
                        <BackHandler/>
                            {/* <div className="dashboard-carousel dashboard-carousel-gallery">
                                <Carousel breakPoints={breakPoints} onChange={(id) => setCurrentImg(id.item.image)}>
                                    <GalleryCard image={img6}/>
                                </Carousel>
                            </div> */}
                            <div className="gallery-image-sec gallery-image-sec-master-plan">
                                <img src={img3} alt="gallery" />
                            </div>
                    </div>
                    <div class="project-home-footer floor-plan-single-footer">
                        <button class="btn btn-primary login-btn" type="submit">
                            <a href={currentImg} download>
                                Download
                                <img src={download_white} alt="download" />
                            </a>
                        </button>
                        <button class="btn btn-primary login-btn" type="submit">
                            Send
                        <img src={send_white} alt="send" />
                        </button>
                    </div>
                {/* </div> */}
                
            </div>
        </>
    )
}

export default FloorPlanSingle
