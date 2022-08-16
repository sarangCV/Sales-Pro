import React from 'react';
import projectLogo from '../../assets/project-home/project-logo.jpg';
import green_building from '../../assets/green-building/building-1.jpg'
import Card from '../../components/project-home/Card';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// importing logos
import { apartment, apartment_grey, energy, floor_plan, floor_plan_two, gallery, galler_two, info, info_two, inventory, inventory_two, soild_waste, solid_waste, walkthrough, walkthrough_two, water_energy } from '../../assets/icons';
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
import Table from 'react-bootstrap/Table'

import './style.css';

const GreenBuilding = () => {

    const history = useHistory();

    return (
        <>
            <Navbar title="PROJECT HOME"/>
            <div className="container-sec container-sec-project-info">
                    {/* <div className="container"> */}
                        <div className="border-sec border-sec-gallery">
                            <BackHandler/>
                            <div className="project-info-title">
                                <h1>THE GREEN BUILDING CONCEPT</h1>
                                
                            </div>
                            <div className="project-info-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12 green-building-image-sec">
                                            <img src={green_building} alt="img" />
                                        </div>
                                        <div className="col-lg-6 col-sm-12 green-building-para-sec">
                                            <h2>What is Green Building?</h2>
                                            <p>Green building (also known as green construction or sustainable building) refers to both a
                                            structure and the application of processes that are environmentally responsible and resource-
                                            e cient throughout a building's life-cycle: from planning to design, construction, operation,
                                            maintenance, renovation, and demolition as compared to a conventional building.</p>
                                            <h2>Benefits of Green buildings:</h2>
                                            <p>A Green Building has tremendous bene ts, both tangible and intangible. The most tangible
                                                bene t is in reduction in water and operating energy costs from day one, during the entire life
                                                cycle of the building.</p>
                                                <Table bordered>
                                                    <thead>
                                                        <tr>
                                                            <th>Tangible Bene ts:</th>
                                                            <th>Intangible Bene ts:</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td> <img src={energy}/> Energy Savings–20-30%</td>
                                                            <td>Enhanced air ventilation</td>
                                                        </tr>
                                                        <tr>
                                                            <td> <img src={water_energy}/> Water Savings–30-50%</td>
                                                            <td>Improved day lighting</td>
                                                        </tr>
                                                        <tr>
                                                            <td rowspan="2"><img src={solid_waste}/>Solid Waste Management (up to 50 Kgs)–100% </td>
                                                            <td>Improved Health and well-being of the occupants</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Conservation of the scarce natural resources</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="project-info-content green-building-info-content">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 col-sm-12 green-building-para-sec">
                                            <h2 className="green-building-title-left">HOW OUR PROJECT IS GOLD RATED GREEN BUILDING & How the Residents are bene tted by Gold Rating?</h2>
                                            <p>Following features have been incorporated in the building to make it Green Homes Gold Rated Compliant:</p>
                                            <ul>
                                                <li><span className="bold-txt-green">Energy efficient building envelope:</span> Use of materials like AAC Block, cement with lower
                                                    thermal conductivity and use of high SRI (Solar Re ective Index) materials on roof reduces
                                                    the cooling load of the building. This will reduce the heat load inside the apartment hence
                                                    lower the conditioning load directly resulting in reduced electricity bills.</li>
                                                <li><span className="bold-txt-green">Improved day lighting:</span> We have designed and used energy e cient lower lighting
                                                    power density products in residential and common areas which reduces the overall energy
                                                    consumption of the building. LED lighting does not contain the mercury, more illuminance
                                                    lux at lower watt resulting to the energy e ciency and better indoor air quality.</li>
                                                <li><span className="bold-txt-green">Recycled material:</span> Use of recycled content materials like Bricks, Cement, Steel, Glass, etc in
                                                    the building construction to reduce the demand of virgin material so that less harm is done
                                                    to the mother earth.</li>
                                                <li><span className="bold-txt-green">Regional material:</span> Use of regional materials like, Cement, AAC Blocks, Steel, Sand,
                                                    Aggregates, etc. (manufactured within a radius of 400km) in the building construction. This
                                                    saves the mother earth and environment from getting more polluted as the transportation
                                                    distance is less and the fuel burnt is less, so we have less pollution to a ect the environment.
                                                    It also helps us in recognizing the local productions and uplifts them.</li>
                                                <li><span className="bold-txt-green">Natural daylight and Fresh air:</span> Optimized window to carpet area ratio enhances daylight
                                                    and fresh air ventilation in each unit, giving a healthy living environment to the occupants.
                                                    We have provided big doors instead of windows at most of the places, to let in more daylight
                                                    and fresh air. This will indirectly reduce the lighting load and increase more fresh air.</li>
                                                <li><span className="bold-txt-green">Rainwater harvesting:</span> The project is designed to use roof rainwater in consumption for
                                                    services and to do harvesting to recharge the groundwater level. We have also provided
                                                    rainwater storage tank for using it for landscape watering and for car washing. The over ow
                                                    water from tank would also not go waste and would go to Mother Earth for recharge.</li>
                                                <li><span className="bold-txt-green">Non-fossil fuel facility for vehicles:</span> Electric charging points in the parking area to charge
                                                    the electric cars and two-wheelers. We have provided 4 electrical charging points in the
                                                    common strategic area. Users can pay and plan it’s usage according to their choice at the
                                                    time of need based on the society management systems. We intend to encourage the use of
                                                    non-fossil fuel vehicles and to reduce the pollution from automobile use.</li>
                                                <li><span className="bold-txt-green">Energy metering:</span> Electrical energy metering to monitor the kWh consumption at each major
                                                    end use such as exterior common lighting, municipal water pumping to overhead tanks and
                                                    water pumping for landscaping. This is bene cial to track the electrical consumption and
                                                    analyze your expenses and wastages.</li>
                                                <li><span className="bold-txt-green">Water metering:</span> Water metering to monitor the water consumption at major area like rain
                                                    water reuse for landscaping and car washing, also for monitoring municipal water. This will
                                                    help in tracking the water consumption.</li>
                                                <li><span className="bold-txt-green">Waste segregation:</span> We will be installing waste bins one on each  oor as well as in the
                                                    common areas, post occupancy. The waste will be segregated under individual awareness at
                                                    the house level by separating dry and wet waste inside the  ats, and the bins stored in the
                                                    common area will then be diverted to waste recyclers i.e. organic waste converter (OWC).
                                                    This will help in proper waste handling and would help to supply its raw material to OWC.</li>
                                                <li><span className="bold-txt-green">Organic Waste treatment:</span> Onsite organic waste converter to treat 100% of organic waste
                                                    generated in the building, thus preventing waste being sent to land ll. Output of the OWC
                                                    (organic waste converter) system is garden manure which will be used for landscaping
                                                    purposes, which otherwise needs to be purchased on cost. The project would have a 50 kg/
                                                    day OWC at site. This is the great example of organic waste recycling and reusing at site itself.
                                                    Hence reducing the waste burden on the municipality and project moving towards Green
                                                    initiative.</li>
                                                <li><span className="bold-txt-green">Tobacco smoke control:</span> In order to minimize the adverse health impacts arising due to
                                                    passive smoking, it is completely prohibited in common areas. This is helping in better
                                                    Indoor air quality and better lifestyle.</li>
                                                <li><span className="bold-txt-green">Lift:</span> the project lift would have brail and audio assistance system in lift to cater to the needs
                                                    of blind or having partial vision loss. There is one stretcher lift for emergencies and taking
                                                    the patient safely if needed.</li>
                                                <li><span className="bold-txt-green">Window Glass:</span> We have used 5 mm Saint Gobain ST-167 re ective Glass at all places which
                                                    resists penetrating solar to the interior and 8 mm ST 467 for building façade. Both the glasses
                                                    are having excellent thermal properties as compared to the normal glass. This results in
                                                    lesser heat from sun and less heat load of AC directly reduce the Air conditioning load also.</li>
                                                <li><span className="bold-txt-green">Onsite Renewable Solar Energy:</span> We have installed Solar Power Plant of 7 kW on the
                                                    rooftop for the lighting of the common areas. Solar power is pollution free and causes no greenhouse 
                                                    gases to be emitted after installation. Reduced dependence on foreign oil and
                                                    fossil fuels. Renewable clean power that is available every day of the year, even cloudy days
                                                    produce some power. It will also reduce common area electricity bills for the building.</li>
                                                <li><span className="bold-txt-green">Energy Saving in Other Appliances & Equipment:</span> We have provided at maximum places
                                                    the motors with more than 75% energy efficient & pumps with more than 60% efficiency.
                                                    This is beneficial in improving the project energy efficiency. These pumps and motors
                                                    consume less power as compared to conventional system available.</li>
                                                <li><span className="bold-txt-green">Water Fixtures:</span> We have used low  ow water  xtures for the project. Recommended water
                                                    flow rate is mentioned below:
                                                    (a) Water closet – dual  ush (4 LPF and 2 LPF), (b) Health faucets – 6 LPM,
                                                    (c) Shower – 6 LPM, (d) Kitchen sink faucets – 3.8 LPM, (e) Wash basin faucets – 3.8 LPM.
                                                    This is bene cial in reducing the indoor water consumption to the residents and save mother
                                                    earth in this coming water crisis situation.</li>
                                                <li><span className="bold-txt-green">Distributed Power Generation:</span> Installation of Hybrid Distributed Power Sets which operate
                                                    on both bio-fuels/non edible oils & diesel fuels which cater at least 15% connected load of
                                                    the building. Bio fuel is renewable source and by using this we can save few quantity of non-
                                                    renewable oil like Diesel. This may be helpful for conservation of natural resources.</li>
                                                <li><span className="bold-txt-green">HVAC system:</span> The project team is providing VRV system and the VRV system has Higher
                                                    COP(4) equate to lower operating costs. This will reduce the resident’s air conditioning
                                                    consumption and hence lesser electricity bills.</li>
                                                <li><span className="bold-txt-green">Design for handicapped:</span> </li>
                                                <ul style={{"margin-left": '50px', "listStyle": 'square'}}>
                                                    <li>We have provided preferred car parking spaces in area which has easy access to main
                                                        entrance</li>
                                                    <li>We have provided ramp at building entrance gate to facilitate the Handicapped to reach
                                                        their Apartment without any assistance</li>
                                                    <li>We have provided toilet for handicapped person at the ground  oor level for emergency
                                                        cases of the handicapped.</li>
                                                </ul>
                                                <li><span className="bold-txt-green">Exhaust Systems, Bathroom & Kitchen:</span> We have provided exhaust fans in Kitchen and
                                                    Bathrooms. This will reduce the indoor pollution and make indoor environment better to live
                                                    and improve indoor health and well being.</li>
                                                <li><span className="bold-txt-green">FSC Certified Wood:</span> We are using wood door frames & door shutters in the project, which
                                                    are FSC (Forest Stewardship Council) certified. We are using the wood material which are
                                                    certi ed and are from sustainable forests. These Forests are well managed and / or are made
                                                    from recycled resources and we are helping to ensure our forests are alive for generations to
                                                    come.</li>
                                                <li><span className="bold-txt-green">Low VOC paints, Adhesives and Sealants:</span> Use of low volatile organic compound (VOC)
                                                    paints in the building to reduce the ill e ects of the paints on the building occupants.
                                                    VOCs—volatile organic compounds—are a major source of indoor air pollution and can
                                                    have a range of health e ects, from minor irritations to chronic respiratory issues. By using
                                                    Low VOC paints these e ects can be reduced.</li>
                                                <li><span className="bold-txt-green">Eco friendly housekeeping materials:</span> We shall be adopting eco-friendly housekeeping
                                                    practices by using bio-degradable chemicals which are Green Seal certified. While toxic
                                                    chemicals will kill germs, they also do a lot in number on your health as well. The project
                                                    intends to use of green chemicals for maintenance in common area which can also be
                                                    adopted by all individual  flat owners, resulting in better health environment inside the
                                                    spaces.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    {/* </div> */}
            </div>
        </>
    )
}

export default GreenBuilding;
