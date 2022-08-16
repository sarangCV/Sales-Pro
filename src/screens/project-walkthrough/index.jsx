import React from 'react';
import Carousel from 'react-elastic-carousel';
import GalleryCard from '../../components/project-gallery';
import Navbar from '../../components/navbar';

import walkthrough_one from '../../assets/project-walkthrough/1.mp4'
import walkthrough_two from '../../assets/project-walkthrough/2.mp4'
import walkthrough_three from '../../assets/project-walkthrough/3.mp4'
import walkthrough_four from '../../assets/project-walkthrough/4.mp4'

import './style.css';
import WalkthroughCard from '../../components/project-walkthrough';
import BackHandler from '../../components/back-handler';

const ProjectWalkthrough = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 1 },
        { width: 768, itemsToShow: 1, itemsToScroll: 1 },
        { width: 1200, itemsToShow: 1, itemsToScroll: 1}
      ];

    //   const toggleFullScreen = () => {
    //     var el = document.getElementById("full-screenVideo");
    //     if (el.requestFullscreen) {
    //       el.requestFullscreen();
    //     } else if (el.msRequestFullscreen) {
    //       el.msRequestFullscreen();
    //     } else if (el.mozRequestFullScreen) {
    //       el.mozRequestFullScreen();
    //     } else if (el.webkitRequestFullscreen) {
    //       el.webkitRequestFullscreen();
    //     }
    //   };

    return (
        <>
            <Navbar title="PROJECT WALKTHROUGH"/>
            <div className="container-sec">
                {/* <div className="container"> */}
                    <div className="border-sec border-sec-gallery">
                        <BackHandler/>
                        {/* <video src={walkthrough} width="70%" height="50%" controls="controls" autoplay="true" /> */}
                        {/* <div className="dashboard-carousel dashboard-carousel-gallery">
                            <Carousel breakPoints={breakPoints}>
                                <WalkthroughCard video={walkthrough_one}/>
                                <WalkthroughCard video={walkthrough_two}/>
                                <WalkthroughCard video={walkthrough_three}/>
                            </Carousel>
                        </div> */}
                        <video src={walkthrough_four} width="60%" height="100%" controls="controls" id="full-screenVideo" autoplay="true"/>
                    </div>
                {/* </div> */}
                
            </div>
        </>
    )
}

export default ProjectWalkthrough;
