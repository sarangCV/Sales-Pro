import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Navbar from '../../components/navbar'

import './style.css'
import BackHandler from '../../components/back-handler';

const PriceSheet = () => {
    const history = useHistory();

    return (
        <>
            <Navbar title="PRICE SHEET"/>
            <div className="container-sec container-sec-price-sheet">
                {/* <div className="container"> */}
                    <div className="border-sec border-sec-gallery">
                        <BackHandler/>
                        <div className="price-sheet-section-one">
                            <div className="price-sheet-appartment-details">
                                <h3>APARTMENT DETAILS</h3>
                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td>Project name</td>
                                            <td>Real city atmosphere</td>
                                        </tr>
                                        <tr>
                                            <td>Unit number</td>
                                            <td>057</td>
                                        </tr>
                                        <tr>
                                            <td>Saleabale plot area</td>
                                            <td>3561</td>
                                        </tr>
                                        <tr>
                                            <td>Actual plot area</td>
                                            <td>2114</td>
                                        </tr>
                                        <tr>
                                            <td>Additional plot area</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>No of car parks</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="price-sheet-appartment-details">
                                <h3>PRICING DETAILS</h3>
                                <Table striped bordered hover>
                                    <tbody>
                                        <tr>
                                            <td>Project name</td>
                                            <td>Real city atmosphere</td>
                                        </tr>
                                        <tr>
                                            <td>Unit number</td>
                                            <td>057</td>
                                        </tr>
                                        <tr>
                                            <td>Saleabale plot area</td>
                                            <td>3561</td>
                                        </tr>
                                        <tr>
                                            <td>Actual plot area</td>
                                            <td>2114</td>
                                        </tr>
                                        <tr>
                                            <td>Additional plot area</td>
                                            <td>14000</td>
                                        </tr>
                                        <tr>
                                            <td>No of car parks</td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="price-sheet-section-two">
                            <div className="price-sheet-appartment-details">
                                <h3>ADDITIONAL CHARGES & DEPOSITS</h3>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Description</th>
                                            <th>Amount</th>
                                            <th>GST</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Project name</td>
                                            <td>4,27,320</td>
                                            <td>0</td>
                                            <td>4,27,320</td>
                                        </tr>
                                        <tr>
                                            <td>Unit number</td>
                                            <td>4,27,320</td>
                                            <td>0</td>
                                            <td>4,27,320</td>
                                        </tr>
                                        <tr>
                                            <td>Saleabale plot area</td>
                                            <td >4,27,320</td>
                                            <td>0</td>
                                            <td >4,27,320</td>
                                        </tr>
                                        <tr>
                                            <td>Actual plot area</td>
                                            <td>4,27,320</td>
                                            <td>0</td>
                                            <td>4,27,320</td>
                                        </tr>
                                        <tr>
                                            <td>Additional plot area</td>
                                            <td>4,27,320</td>
                                            <td>0</td>
                                            <td>4,27,320</td>
                                        </tr>
                                        <tr>
                                            <td>No of car parks</td>
                                            <td>4,27,320</td>
                                            <td>0</td>
                                            <td>4,27,320</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        <div className="project-inventory-footer">
                                <button className="btn btn-primary login-btn inventory-btn-5" type="submit" onClick={()=>history.push('/booking-form')}>
                                    Send Quote
                                </button>
                            </div>
                    </div>
                {/* </div> */}
                
            </div>
        </>
    )
}

export default PriceSheet
