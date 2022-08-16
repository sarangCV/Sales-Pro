import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import BackHandler from '../../components/back-handler';
import Navbar from '../../components/navbar';

import './style.css'

const BookingForm = () => {

    return (
        <>
            <Navbar title="BOOKING FORM"/>
            <div className="container-sec container-sec-booking-form">
                {/* <div className="container"> */}
                    <div className="border-sec border-sec-booking-form">
                        <BackHandler/>
                        <div className="form-title">
                            <h2>Please fill out below</h2>
                        </div>
                        <div className="booking-form-section-one">
                            <div className="booking-form-container">
                                <form className="booking-form">
                                    <label>Unit number</label>
                                    <input type="number" className="form-control login-input" placeholder="Enter Unit number" />
                                    <label>Appartment type</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Appartment type"/>                             
                                </form>
                            </div>
                            <div className="booking-form-container">
                                <form className="booking-form">
                                    <label>Unit floor</label>
                                    <input type="number" className="form-control login-input" placeholder="Number Unit floor" />
                                    <label>Tower</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Tower"/>                             
                                </form>
                            </div>
                        </div>
                        <div className="booking-title">
                            <h3>APPLICATION ALLOTMENT - RESEDIENTIAL</h3>
                        </div>
                        <div className="booking-form-section-two">
                            
                            <div className="booking-form-container">
                                <form className="booking-form">
                                    <label>Name</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Name" />
                                    <label>Son/ Daughter/ Wife Of</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Son/ Daughter/ Wife Of"/> 
                                    <label>Date of birth</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Date of birth"/>   
                                    <label>Pan number</label>
                                    <input type="number" className="form-control login-input" placeholder="Enter Pan number"/>
                                    <label>Aadhar number</label>
                                    <input type="number" className="form-control login-input" placeholder="Enter Aadhar number"/>
                                    <label>Phone number</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Phone number"/>
                                                        
                                </form>
                            </div>
                            <div className="booking-form-container">
                                <form className="booking-form">
                                    
                                    <label>Email id</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Email id"/>
                                    <label>Passport number</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Passport number"/>  
                                    <label>Correspondence Address</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Correspondence Address"/>
                                    <label>Permanent Address</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Permanent Address"/>    
                                    <label>Power of attorney holder's name (if required)</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Power of attorney holder's name"/>      
                                    <label>Power of attorney holder's address</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Power of attorney holder's address"/>                   
                                </form>
                            </div>
                        </div>
                        <div className="booking-title">
                            <h3>PROFESSIONAL DETAILS</h3>
                        </div>
                        <div className="booking-form-section-two">
                            <div className="booking-form-container">
                                <form className="booking-form">
                                    <label>Professional</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Professional"/>
                                    <label>Industry</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Industry"/> 
                                </form>
                            </div>
                            <div className="booking-form-container">
                                <form className="booking-form">
                                    <label>Employed at</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Employed at"/>
                                    <label>Designation</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Designation"/>  
                                </form>
                            </div>
                        </div>
                        <div className="booking-title">
                            <h3>PROJECT DETAILS</h3>
                        </div>
                        <div className="booking-form-section-two">
                            
                            <div className="booking-form-container">
                                <form className="booking-form">
                                    <label>Project</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Project" />
                                    <label>Flat / Unit no</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Flat / Unit no"/> 
                                    <label>Carpet area</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Carpet area"/> 
                                </form>
                            </div>
                            <div className="booking-form-container">
                                <form className="booking-form">
                                    <label>Rate per sft</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Rate per sft"/>
                                    <label>Car park</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Car park"/>  
                                    <label>Club house charges</label>
                                    <input type="text" className="form-control login-input" placeholder="Enter Club house charges"/> 
                                </form>
                            </div>
                        </div>
                        <div className="booking-form-footer">
                            <button className="btn btn-primary login-btn" type="submit">
                                Book unit
                            </button>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default BookingForm
