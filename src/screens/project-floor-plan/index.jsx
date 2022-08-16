import React from 'react';
import Carousel from 'react-elastic-carousel';
// import Card from '../../components/project-floor-plan';
import Card from '../../components/project-home/Card';

import {  two_bhk_colored, three_bhk_colored, four_bhk_colored, floor_plan_two } from '../../assets/icons';

import Navbar from '../../components/navbar';


import { useHistory } from 'react-router-dom';


import './style.css';
import BackHandler from '../../components/back-handler';

const FloorPlan = () => {

    const history = useHistory();

    return (
        <>
            <Navbar title="PROJECT FLOOR PLAN"/>
            <div className="container-sec">
                    {/* <div className="container container-bg"> */}
                        <div className="border-sec">
                            <div className="project-home-menu project-home-menu-floor-plan">
                            <BackHandler/>
                                <Card img={two_bhk_colored} title="2 BHK" onClick={()=>history.push('/floor-plan-single-one')}/>
                                <Card img={three_bhk_colored} title="3 BHK" onClick={()=>history.push('/floor-plan-single-two')}/>
                                <Card img={four_bhk_colored} title="4 BHK" onClick={()=>history.push('/floor-plan-single-three')}/>

                                {/* <Card title="3 BHK" onClick={()=> history.push('/floor-plan-single-one')}/>
                                <Card title="4 BHK" onClick={()=> history.push('/floor-plan-single-two')}/> */}
                            </div>
                        </div>
                    {/* </div> */}
                
            </div>
        </>
    )
}

export default FloorPlan
