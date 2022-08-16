import React from 'react';
import projectLogo from '../../assets/project-home/project-logo.jpg';
import project_info from '../../assets/project-info/1.jpg'
import Card from '../../components/project-home/Card';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// importing logos
import { apartment, apartment_grey, floor_plan, floor_plan_two, gallery, galler_two, info, info_two, inventory, inventory_two, walkthrough, walkthrough_two } from '../../assets/icons';
import Navbar from '../../components/navbar';

import ico_1 from '../../assets/project-info/2.png';
import ico_2 from '../../assets/project-info/3.png';
import ico_3 from '../../assets/project-info/4.png';
import ico_4 from '../../assets/project-info/5.png';
import ico_6 from '../../assets/project-info/6.png';
import ico_7 from '../../assets/project-info/7.png';
import ico_8 from '../../assets/project-info/8.png';
import ico_9 from '../../assets/project-info/9.png';
import ico_10 from '../../assets/project-info/10.png';
import ico_11 from '../../assets/project-info/11.png';
import ico_12 from '../../assets/project-info/12.png';
import ico_13 from '../../assets/project-info/13.png';
import ico_14 from '../../assets/project-info/14.png';
import ico_15 from '../../assets/project-info/15.png';
import ico_16 from '../../assets/project-info/16.png';

import map from '../../assets/project-info/map.jpg';
import info_1 from '../../assets/project-info/info-1.jpg';
import info_2 from '../../assets/project-info/info-4.jpg';


import BackHandler from '../../components/back-handler';
import './style.css';

const ProjectHome = () => {

    const history = useHistory();

    return (
        <>
            <Navbar title="PROJECT HOME"/>
            <div className="container-sec container-sec-project-info">
                    {/* <div className="container"> */}
                        <div className="border-sec border-sec-gallery">
                            <BackHandler/>
                            <div className="project-info-title">
                                <h1>Project Overview</h1>
                                <p>Shree Krishna Ashrey is designed to be 19% more energy efficient and ensures 
                                    50% more cross ventilation in the building to let in excellent day lighting, enhance 
                                    air quality and reduce heat within the flats. The efficient design has resulted in 
                                    achieving Pre-Certified Gold rating from internationally recognized Indian Green 
                                    Building Council - IGBC Green Homes which is an art of the Confederation of Indian Industry (CII). 
                                    The immediate and most tangible benefit of is design is in the reduction in water and operating energy 
                                    costs right from day one, during the entire life cycle of the building. At Shree Krishna Ashrey, 
                                    we ensure you nature friendly homes for your peaceful and healthy Ashrey.</p>
                            </div>
                            <div className="project-info-content">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12 project-info-img-sec">
                                        <img className="project-info-img" src={project_info} alt="img" />
                                    </div>
                                    <div className="col-lg-6 col-sm-12 project-info-ul-sec">
                                        <h2>It Is Our Environment To</h2>
                                        <ul>
                                            <li>Reuse, recycle and conserve scarce national natural resources</li>
                                            <li>Reduce maintenance cost by utilizing the solar energy in common areas.</li>
                                            <li>Use in-house Organic waste decomposer machine to handle the waste material of flats. 
                                                This helps in reducing the waste to make fertilizer for landscape garden.</li>
                                            <li>Use efficient and low water fixtures to reduce wastage of water and costs.</li>
                                            <li>Provide water and energy meters in common areas which will help in their efficient monitoring and consumption controls.</li>
                                            <li>Harvest roof rain water to reuse them in common area requirements</li>
                                            <li>Provide elevators with braille and audio assistance for special need of residents.</li>
                                            <li>Design ground floor to include provisions specially for differently abled people / elders.</li>
                                            <li>Use low VOC paints to reduce the harmful side effects on the residents.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info-content">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 info-spec-sec">
                                        <img src={info_1} alt="map" />
                                    </div>
                                </div>
                            </div>
                            <div className="project-info-content">
                            <h2>31 Upmarket Features For 31 Luxury Apartments</h2>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-12 project-info-ul-sec">
                                    <ul>
                                            <li>Building design is 18% more energy efficient</li>
                                            <li>Daylight compliance by more than 75% of the regularly occupied space in the apartment.</li>
                                            <li>Sufficient Fresh air ventilation in regular occupied space</li>
                                            <li>Water & Energy meter for monitoring consumption in common areas</li>
                                            <li>Organic Waste Composter</li>
                                            <li>7KW Solar Energy for Common Areas</li>
                                            <li>Rain water harvesting and recharge</li>
                                            <li>Low VOC paints in Common Areas</li>
                                            <li>Samanvaya - The Indoor Games Room</li>
                                            <li>Ojas - The Lounge</li>
                                            <li>Sfurti - The Gymnasium</li>
                                            <li>Mudra - The Yoga Area</li>
                                            <li>Madhuban - The Terrace Garden</li>
                                            <li>Utsav - The Community Hall</li>
                                            <li>Vastu Friendly Homes</li>
                                            <li>Well Designed Ground floor lobby with AC</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 col-sm-12 project-info-ul-sec">
                                        <ul>
                                            <li>Auto Generator back up</li>
                                            <li>Two High Speed Elevators</li>
                                            <li>Provisions for specially abled people</li>
                                            <li>Exhaust Fans at Kitchen and Toilets</li>
                                            <li>VDP & intercom</li>
                                            <li>CCTV Surveillance</li>
                                            <li>Safety Grill</li>
                                            <li>24*7 Manned Security</li>
                                            <li>Lightning Arrestor</li>
                                            <li>State of the Art Fire Fighting System</li>
                                            <li>Access Control at Strategic Places</li>
                                            <li>Association Room</li>
                                            <li>Extra Deck Area</li>
                                            <li>Servant Rooms</li>
                                            <li>Mobile app for all maintenance work</li>
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info-content project-info-spec">
                                <h2>Specifications</h2>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12 info-spec-sec">
                                        <h3>FOUNDATION & STRUCTURE:</h3>
                                        <p>R.C.C. foundation with piling.</p>
                                        <p>R.C.C. frame structure designed with current earthquake zone consideration.</p>
                                        <h3>DOORS & DOOR FRAMES:</h3>
                                        <p>Flush door with solid/engineered PSC approved wood frame.</p>
                                        <p>Entrance door shall have superior Lock i handle</p>
                                        <p>Bedroom doors shall have mortise lock with handle and door stopper</p>
                                        <h3>WINDOWS</h3>
                                        <p>All windows will be standard section Aluminum sliding/ Casement with glass.</p>
                                        <p>Grills at places as designed and finalized by the Project Architect</p>
                                        <h3>WALLS:</h3>
                                        <p>AAC Blocks</p>
                                        <h3>LIFTS:</h3>
                                        <p>Residential Area: One high Speed Passenger Lift and One high Speed Service Lift 
                                            of OTIS/KONE or equivalent with automatic door, braille & audio assistance.</p>
                                        <p>Commercial Area: One Passenger Lift up to 2nd Floor</p>
                                        <h3>FLOORING:</h3>
                                        <p>Vitrified tiles for living, dining, bedrooms, kitchen and balcony, in tolles Ceramic tiles matching with wall tiles.</p>
                                        <h3>TOILETS:</h3>
                                        <p>Ceramic tiles on the walls up to door height</p>
                                        <p>White Porcelain sanitary wares of Hindware/Parryware or equivalent</p>
                                        <p>Water closets wall mounted European type commode with concealed cistern</p>
                                        <p>Standard basin as designed and/or selected by Project Architect</p>
                                        <p>Provision for Geysers and Power points in all tollets.</p>
                                        <p>CP fittings of Jaguar/Hindware or equivalent make</p>
                                        <p>Exhaust Fan for appropriate ventilation</p>

                                    </div>
                                    <div className="col-lg-6 col-sm-12 info-spec-sec">
                                        
                                        <h3>KITCHEN:</h3>
                                        <p>Granite top or equivalent cooking platform with Blackstone partition with one stainless steel sink.</p>
                                        <p>Walls of kitchen to be covered with ceramic tiles up to a height of 2 feet above granite top.</p>
                                        <p>Provision for Water Filter near sink area.</p>
                                        <p>Exhaust Fan installed in window.</p>
                                        <p>Provision for Washing Machine in designated area.</p>
                                        <h3>INTERIOR WALL FINISH:</h3>
                                        <p>White Putty finish.</p>
                                        <h3>ELECTRICAL WIRING & FITTINGS AND GENERATOR POWER:</h3>
                                        <p>Total concealed electrical wiring for all the rooms with copper conductors.</p>
                                        <p>VRV Air-conditioning Unit at extra charges in all the bedrooms and living/dining Hall</p>
                                        <p>Light and plug point in dining/drawing and bedrooms.</p>
                                        <p>Electrical calling bell provision at main entrance door.</p>
                                        <p>Intercom point in living area. Telephone point in living and all bedrooms.</p>
                                        <p>Provision for cable TV connection in living room and all bedrooms.</p>
                                        <p>DTH services as selected by the Developer</p>
                                        <p>Generator power 1000 VA for 2 BHK, 1500 VA for 3 BHK & 2000 VA for 4 BHK.</p>
                                        <p>Generator power back up for common areas including lights, pumps and lift.</p>
                                        <h3>SECURITY SYSTEM:</h3>
                                        <p>Closed Circuit Television (CCTV).</p>
                                        <p>Security & Intercom at the entrance of the Apartment and at Reception.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info-content">
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12 project-info-img-sec">
                                        <img className="project-info-img" src={map} alt="img" />
                                    </div>
                                    <div className="col-lg-6 col-sm-12 project-info-ul-sec">
                                        <h2>Commute with ease</h2>
                                        <h5>Domestic and International Airport 25 mins away.</h5>
                                        <h5>Sealdah, Kolkata, Bidhannagar & Howrah Railway Stations are at close proximity.</h5>
                                        <h5>Doorstep availability of every local transport facilities.</h5>
                                        <h5>Walking Distance: </h5>
                                        <ul>
                                            <li>V.I.P Market</li>
                                            <li>Various Convenience Stores, Pharmacies, Banks, ATM, Home Appliances stores</li>
                                            <li>Super Markets, Maniktalla Bazaar etc.</li>
                                            <li>Restaurants & Eateries like Haldirams, Bhikharam Chandmal, Tewari, Sharma Tea, Gokul, CCD, Rose, Chai Break, Cafe 360 etc.</li>
                                        </ul>
                                        <h5>At 5-20 min distance: </h5>
                                        <ul>
                                            <li>Girish Park Metro Station.</li>
                                            <li>Upcoming Phool Bagan Metro Station.</li>
                                            <li>Schools, Parks & Entertainment zones.</li>
                                            <li>Diagnostic Centres like Bansal, JMD, Suraksha & Purwanchal etc.</li>
                                            <li>Medical Emergencies and Hospitals like Apollo, Columbia Asia, AMRI, ILS, Divine Nursing Home and Charring Cross Hospital etc.</li>
                                            <li>Hangouts & Malls like City Centre I, Mani Square, Swabhumi, Pantaloons etc.</li>
                                            <li>Barsana Club for lifestyle facilities like swimming, spa, yoga, dance, karate etc.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info-content">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-12 info-spec-sec">
                                        <img src={info_2} alt="map" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </div> */}
            </div>
        </>
    )
}

export default ProjectHome;
