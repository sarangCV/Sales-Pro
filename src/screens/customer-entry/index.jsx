import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react'
import { useHistory, Redirect } from 'react-router-dom';
import Navbar from '../../components/navbar';

import './style.css'
import BackHandler from '../../components/back-handler';
import { addDoc, collection, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useUserContext } from '../../context/userContext';


const CustomerEntry = () => {

    const history = useHistory();

    const { signInUser, user, loading, error} = useUserContext();

    const [contactNumber, setContactNumber] = useState('');
    const [contactName, setcontactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [selectedProject, setSelectedProject] = useState('');

    const projects = [
        {
            key: 1,
            text: 'Shri Krishna Ashrey',
            value: 'Shri Krishna Ashrey'
        }
        
    ]

    const validation = () => {
        console.log(contactNumber, contactName, contactEmail, selectedProject);
        if(contactNumber === '' || contactName === '' || contactEmail === '' || selectedProject === '') {
            return false
        } else {
            if(contactNumber.match(/^(\+\d{1,3}[- ]?)?\d{10}$/) && ! (contactNumber.match(/0{5,}/)) ) {
                if(String(contactEmail)
                .toLowerCase()
                .match(
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )) {
                    return true
                }
            }
            return false;
        }
        
    }

    const submitCustomer = async (event) => {
        event.preventDefault();
        console.log(validation());
        if(validation()) {
            const customerCollectionRef = collection(db, 'customers');
            const isUser = await addDoc(customerCollectionRef, {
                number: contactNumber,
                name: contactName,
                email: contactEmail,
                project: selectedProject,
                userId: user.uid
            })
            if(isUser) {
                alert("User Added");
                setContactNumber('');
                setcontactName('');
                setContactEmail('');
                setSelectedProject('');
            } else {
                alert("Please provide details")
            }
            console.log(isUser);
        } else {
            alert('Please fill all the details correctly..! ')
        }

        
    }
    return (
        <>
            <Navbar title="Customer entry"/>
            <div className="container-sec">
                    {/* <div className="container container-bg"> */}
                        <div className="border-sec border-sec-customer-entry">
                            <BackHandler/>
                            <div className="customer-title">
                                <h3>Enter the details to continue</h3>
                            </div>
                            <div className="customer-form-sec">
                                <form className="customer-form">
                                    <label>Enter the number</label>
                                    <input type="number" 
                                        className="form-control login-input" 
                                        placeholder="Number" 
                                        value={contactNumber} 
                                        onChange={(e) => setContactNumber(e.target.value)}/>
                                    <label>Enter the name</label>
                                    <input type="text" 
                                        className="form-control login-input" 
                                        placeholder="Name" 
                                        value={contactName}
                                        onChange={(e) => setcontactName(e.target.value)}/> 
                                    <label>Enter the email</label>
                                    <input type="email" 
                                        className="form-control login-input" 
                                        placeholder="Email" 
                                        value={contactEmail}
                                        onChange={(e) => setContactEmail(e.target.value)}/> 
                                    <label>Pick a project intrested in</label>
                                    <div className="customer-form-dropdown">
                                        <Dropdown 
                                            placeholder='Choose' 
                                            search 
                                            selection 
                                            options={projects} 
                                            value={selectedProject} 
                                            onChange={(e, v) => setSelectedProject(v.value)}/>
                                    </div>
                                    
                                    <button className="btn btn-primary login-btn" type="submit" onClick={submitCustomer}>
                                        Add User
                                    </button>
                                </form>
                            </div>
                        </div>
                    {/* </div> */}
                
            </div>
        </>
        
    )
}

export default CustomerEntry
