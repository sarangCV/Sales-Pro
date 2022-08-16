import React from 'react';
import projectLogo from '../../assets/project-home/project-logo.jpg';
import project_one from '../../assets/logo/navbar-logo.png'
import Map from '../../assets/project-home/map-2.png'
import Card from '../../components/project-home/Card';
import { useHistory } from 'react-router-dom';
// importing logos
import { 
        floor_plan_colored,
        gallery_colored,
        info_colored,
        walkthrough_colored,
        inventory_colored,
        floor_plan_colored_two,
        green_building,
        awards} from '../../assets/icons';
import Navbar from '../../components/navbar';

import './style.css';
import BackHandler from '../../components/back-handler';

const ProjectHome = () => {

    const history = useHistory();

    return (
        <>
            <Navbar title="PROJECT HOME"/>
            <div className="container-sec container-sec-project-home">
                {/* <div className="container container-bg"> */}
                    <div className="border-sec border-sec-project-home">
                            <BackHandler/>
                            {/* <h2 style={{width: '100%', color:'#000', textAlign: 'center', marginBottom: 20}}>PROJECT HOME</h2> */}

                            <div className="project-home-header">
                                <div className="project-logo">
                                        <img src={project_one} alt="logo" />
                                </div>
                                {/* <div className="project-info">
                                        <div className="project-info-inner-row project-info-inner-row-first">
                                            <div className="col-3">3 BHK</div>
                                            <div className="col-2"><img src={apartment_white} /></div>
                                            <div className="col-6">AVAILABLE</div>
                                        </div>
                                        <div className="project-info-inner-row">
                                            <div className="col-3">4 BHK</div>
                                            <div className="col-2"><img src={apartment_grey} /></div>
                                            <div className="col-6">SOLD OUT</div>
                                        </div>
                                        <div className="project-info-inner-row">
                                            <div className="col-3">2.5 BHK</div>
                                            <div className="col-3"><img src={apartment} /></div>
                                            <div className="col-4">AVAILABLE</div>
                                        </div>
                                        <div className="project-info-inner-row">
                                            <div className="col-3">3 BHK</div>
                                            <div className="col-3"><img src={apartment_grey} /></div>
                                            <div className="col-4">SOLD OUT</div>
                                        </div>
                                </div> */}
                                {/* <div className="project-map">
                                    <img src={Map} alt="logo" />
                                </div> */}
                            </div>
                            {/* <h2 style={{width: '100%', color:'#000', textAlign: 'center'}}>Project Home</h2> */}
                            <div className="project-home-menu">
                                <Card img={gallery_colored} title="Gallery" onClick={()=>history.push('/project-gallery')}/>
                                <Card img={floor_plan_colored} title="Floor Plan" onClick={()=>history.push('/project-floor-plan')}/>
                                <Card img={floor_plan_colored_two} title="Ground Floor Plan" onClick={()=>history.push('/project-master-plan')}/>
                                <Card img={info_colored} title="Info" onClick={()=>history.push('/project-info')}/>
                                <Card img={walkthrough_colored} title="Walk Through" onClick={()=>history.push('/project-walkthrough')}/>
                                <Card img={inventory_colored} title="Inventory" onClick={()=>history.push('/project-inventory')}/>
                                <Card img={green_building} title="Green Building" onClick={()=>history.push('/green-building')}/>
                                <Card img={awards} title="Awards & Achievements" onClick={()=>history.push('/awards')}/>
                            </div>
                            {/* <div className="project-home-footer">
                                <button className="btn btn-primary login-btn" type="submit" onClick={()=>history.push('/price-sheet')}>
                                    Pricing
                                </button>
                                <button className="btn btn-primary login-btn" type="submit" onClick={()=>history.push('/booking-form')}>
                                    Send Quote
                                </button>
                            </div> */}
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default ProjectHome;
