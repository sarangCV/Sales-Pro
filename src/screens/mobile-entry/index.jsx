import React, {useEffect} from 'react';
import { Dropdown } from 'semantic-ui-react'
import { useHistory, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar';
import BackHandler from '../../components/back-handler';
import { useUserContext } from '../../context/userContext';

import './style.css'

const MobileEntry = () => {

    const history = useHistory();

    const { signInUser, user, loading, error} = useUserContext();

    useEffect(() => {
        console.log(user.uid);
    }, [])

    const projects = [
        {
            key: 1,
            text: 'Purti Hasting',
            value: 'Purti Hasting'
        }
        
    ]
    return (
        <>
            <Navbar title="Customer entry" isAdminBtn={true}/>
            <div className="container-sec">
                    {/* <div className="container container-bg"> */}
                        <div className="border-sec border-sec-mobile-entry-title">
                            <BackHandler/>
                            {/* <button className="btn btn-primary login-btn mobile-entry-admin-btn" type="submit" onClick={() => history.push('/admin')}>
                                Admin
                            </button> */}
                            <div className="customer-title mobile-entry-title">
                                <h3>Enter the mobile number</h3>
                            </div>
                            <div className="customer-form-sec">
                                <form className="customer-form">
                                    <input type="number" className="form-control login-input" placeholder="Number" />
                                    
                                    <div className="btn-container btn-container-mobile-entry">
                                        <button className="btn btn-primary login-btn" type="submit" onClick={() => history.push('/dashboard')}>
                                            Next
                                        </button>
                                        <button className="btn btn-primary login-btn" type="submit" onClick={() => history.push('/customer-entry')}>
                                            Add new customer
                                        </button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    {/* </div> */}
                
            </div>
        </>
        
    )
}

export default MobileEntry