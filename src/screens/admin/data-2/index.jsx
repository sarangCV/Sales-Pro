import React, { PureComponent } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import { Dropdown } from 'semantic-ui-react'
import { useHistory, Redirect } from 'react-router-dom';
import Navbar from '../../../components/navbar';
import BackHandler from '../../../components/back-handler';
import Table from 'react-bootstrap/Table'

import { person, login, quote, customer, meeting, screens, unit } from '../../../assets/icons';

import './style.css'

const AdminData = () => {

    const history = useHistory();

    const data_one = [
        {
          name: "Inventory",
          pv: 4000,
        },
        {
          name: "Gallery",
         
          pv: 1398,
        },
        {
          name: "Etc",
          pv: 9800,
        },
      ];

      const data_two = [
        {
          name: "Project 1",
          pv: 2000,
        },
        {
          name: "Project 2",
         
          pv: 4000,
        },
        {
          name: "Project 3",
          pv: 7000,
        },
      ];

    const projects = [
        {
            key: 1,
            text: 'Name 1',
            value: 'Name 1'
        },
        {
            key: 2,
            text: 'Name 2',
            value: 'Name 2'
        }
        
    ]
    
    return (
        <>
            <Navbar title="Customer entry"/>
            <div className="container-sec container-sec-admin">
                    {/* <div className="container container-bg"> */}
                        <div className="border-sec border-sec-mobile-entry-title border-sec-admin">
                            <BackHandler/>
                            {/* <div className="customer-title mobile-entry-title">
                                <h3>Enter the mobile number</h3>
                            </div> */}
                            <div className="customer-form-sec admin-content-sec">
                                <div className="admin-data-sec-one">
                                    <div className="table-sec">
                                        <div className="admin-single-text-sec">
                                            <div className="admin-icon-sec">
                                                <img src={person} alt="ico" />
                                                <h4>Sales Person Name</h4>
                                            </div>
                                            <div className="customer-form-dropdown admin-person-dropdown">
                                                <Dropdown placeholder='Choose' search selection options={projects} />
                                            </div>
                                        </div>
                                        <div className="admin-single-text-sec">
                                            <div className="admin-icon-sec">
                                                <img src={login} alt="ico" />
                                                <h4>Login Time</h4>
                                            </div>
                                            <div className="login-para-sec">
                                                <p>2:00 pm</p>
                                                <p>3:00 pm</p>
                                                <p>4:00 pm</p>
                                                <p>5:00 pm</p>
                                                <p>6:00 pm</p>
                                                <p>7:00 pm</p>
                                                <p>8:00 pm</p>
                                                <p>9:00 pm</p>
                                                <p>10:00 pm</p>
                                            </div>
                                                
                                        </div>
                                        <div className="admin-single-text-sec">
                                        <div className="admin-icon-sec">
                                            <img src={person} alt="ico" />
                                            <h4>No of leads: 100</h4>
                                        </div>
                                        </div>
                                        <div className="admin-single-text-sec">
                                        <div className="admin-icon-sec">
                                            <img src={quote} alt="ico" />
                                            <h4>No of quotes: 50</h4>
                                        </div>
                                        </div>
                                        <div className="admin-single-text-sec">
                                        <div className="admin-icon-sec">
                                            <img src={customer} alt="ico" />
                                            <h4>No of customer: 20</h4>
                                        </div>
                                        </div>
                                        <div className="admin-single-text-sec">
                                        <div className="admin-icon-sec">
                                            <img src={meeting} alt="ico" />
                                            <h4>No of meetings: 200</h4>
                                        </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="admin-data-sec-two">
                                    <div className="linechart-sec">
                                        <div className="chart-title">
                                            <img src={screens} alt="ico" />
                                            <h3>Screens Shown</h3>
                                        </div>
                                        
                                        <BarChart
                                            width={500}
                                            height={300}
                                            data={data_one}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5
                                            }}
                                            >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="pv" fill="#804d3e" />
                                        </BarChart>
                                    </div>
                                    <div className="linechart-sec">
                                        <div className="chart-title">
                                            <img src={unit} alt="ico" />
                                            <h3>Units Sold</h3>
                                        </div>
                                        <BarChart
                                            width={500}
                                            height={300}
                                            data={data_two}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5
                                            }}
                                            >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="pv" fill="#804d3e" />
                                        </BarChart>
                                    </div>
                                    
                                </div>
                            
                            </div>
                        </div>
                    {/* </div> */}
                
            </div>
        </>
        
    )
}

export default AdminData

