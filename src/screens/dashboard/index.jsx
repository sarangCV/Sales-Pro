import React from 'react';
import Carousel from 'react-elastic-carousel';
import DashboardCard from '../../components/dashboard/Card';

import { useHistory } from 'react-router-dom';


import './style.css';
import Navbar from '../../components/navbar';
import BackHandler from '../../components/back-handler';

const Dashboard = () => {

    const history = useHistory();

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1200, itemsToShow: 4, itemsToScroll: 2}
      ];

    return (
        <>
            <Navbar title="Dashboard"/>
            <div className="container-sec container-sec-dashboard">
                {/* <div className="container container-bg"> */}
                    <div className="border-sec border-sec-dashboard">
                            <BackHandler/>
                            <h3>Projects</h3>
                            <div className="dashboard-card-sec">
                                    <DashboardCard title="Project 1" onClick={()=> history.push('/project-home')}/>
                                    {/* <DashboardCard number="2" onClick={()=> history.push('/project-home')}/>
                                    <DashboardCard number="3" onClick={()=> history.push('/project-home')}/>
                                    <DashboardCard number="4" onClick={()=> history.push('/project-home')}/>
                                    <DashboardCard number="5" onClick={()=> history.push('/project-home')}/>
                                    <DashboardCard number="6" onClick={()=> history.push('/project-home')}/> */}
                            </div>
                            
                    </div>
                {/* </div> */}

            </div>
        </>
        
    )
}

export default Dashboard
