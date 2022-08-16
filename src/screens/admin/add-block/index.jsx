import React, { useState, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react'
import { useHistory, Redirect } from 'react-router-dom';
import Navbar from '../../../components/navbar';
import BackHandler from '../../../components/back-handler';
import { addDoc, collection, doc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useUserContext } from '../../../context/userContext';
import { defaultInventory } from '../../../dummy';
import Modal from 'react-bootstrap/Modal'

import './style.css'
import { Button } from 'react-bootstrap';

const AddBlock = () => {

    const history = useHistory();

    const { signInUser, user, error} = useUserContext();

    const [loading, setloading] = useState(false)
    const [blockLevel, setBlockLevel] = useState('');
    const [blockName, setBlockName] = useState('');
    const [isAvailable, setIsAvailable] = useState('');
    const [isBlocked, setIsBlocked] = useState('')
    const [isInputDisabled, setIsInputDisabled] = useState(false)
    const [inventory, setInventory] = useState([])

    const [isAlert, setIsAlert] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(false)

    useEffect(() => {
      
    }, [])
    
    const available = [
        {
            key: 1,
            text: 'true',
            value: true
        },
        {
            key: 2,
            text: 'false',
            value: false
        }
        
    ]
    const blocked = [
        {
            key: 1,
            text: 'true',
            value: true
        },
        {
            key: 2,
            text: 'false',
            value: false
        }
        
    ]

    const getInventoryData = async () => {
        setloading(true)
        const inventoryCollectionRef = collection(db, 'inventory');
        const q = query(inventoryCollectionRef, where('userId', '==', `${user.uid}`))
        const result = await getDocs(q);
        const in_data = result.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
        setInventory(in_data)
        setBtnDisabled(false)
        console.log('Inventory data---', in_data);
    }

    const randomBlockToggle = (e) => {
        console.log('random generator prop', e.target.checked);
        setBtnDisabled(true)
        setIsInputDisabled(e.target.checked)
        getInventoryData()
        
    }
    const confirmAlert = async () => {
        setIsAlert(false);
        addRandomBoxes()
    }

    const checkRandomBoxStatus = (e) => {
        e.preventDefault();
        console.log('inventory lenght:::', inventory.length);
        if(inventory.length !== 0) {
            setIsAlert(true);
        } else {
            addRandomBoxes()
        }
    }

    const addRandomBoxes = () => {
        var failure = false;
        const inventoryCollectionRef = collection(db, 'inventory');
        defaultInventory.map((v) => {
            v.map( async (r) => {
                const isResult = await addDoc(inventoryCollectionRef, {
                    level: r.level,
                    name: r.name,
                    available: r.available,
                    blocked: r.blocked,
                    userId: user.uid
                })
                if(!isResult) {
                    failure = true;
                }
                console.log('result from loop', isResult);
            })
            
        })
        if(failure) {
            alert('Failed to add random blocks');
        } else {
            alert('Random blocks addedd successfully..!')
            // window.location.reload()
            setIsInputDisabled(false)
            setIsAlert(false)
        }
    }

    // validation of input
    const validation = () => {
        // console.log(contactNumber, contactName, contactEmail, selectedProject);
        if(blockLevel === '' || blockName === '' || isAvailable === '' || isBlocked === '') {
            return false
        } else {
                return true
            }
    }

    // submitting data to the databse
    const addSingleBlock = async (e) => {
        e.preventDefault();
        console.log(validation());
        if(validation()) {
            const inventoryCollectionRef = collection(db, 'inventory');
            const isResult = await addDoc(inventoryCollectionRef, {
                level: blockLevel,
                name: blockName,
                available: isAvailable,
                blocked: isBlocked,
                userId: user.uid
            })
            if(isResult) {
                alert("User Added");
                setBlockLevel('');
                setBlockName('');
                setIsAvailable('');
                setIsBlocked('');
            } else {
                alert("Please provide details")
            }
            console.log(isResult);
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
                                <h3>Enter the block details</h3>
                            </div>
                            <div className="customer-form-sec">
                                <form className="customer-form">
                                    <label>Enter the level</label>
                                    <input type="number" 
                                        className="form-control login-input" 
                                        placeholder="Level" 
                                        value={blockLevel}
                                        disabled={isInputDisabled} 
                                        onChange={(e) => setBlockLevel(e.target.value)}/>
                                    <label>Enter the name</label>
                                    <input type="text" 
                                        className="form-control login-input" 
                                        placeholder="Name" 
                                        value={blockName}
                                        disabled={isInputDisabled}
                                        onChange={(e) => setBlockName(e.target.value)}/> 
                                    <label>Is available</label>
                                    <div className="customer-form-dropdown">
                                        <Dropdown 
                                            placeholder='Choose' 
                                            search 
                                            selection 
                                            options={available} 
                                            value={isAvailable} 
                                            disabled={isInputDisabled}
                                            onChange={(e, v) => setIsAvailable(v.value)}/>
                                    </div>
                                    <label>Is blocked</label>
                                    <div className="customer-form-dropdown">
                                        <Dropdown 
                                            placeholder='Choose' 
                                            search 
                                            selection 
                                            options={blocked} 
                                            value={isBlocked} 
                                            disabled={isInputDisabled}
                                            onChange={(e, v) => setIsBlocked(v.value)}/>
                                    </div>
                                    <div className="admin-dummy-block-sec">
                                        <label>Do you want to create random dummy blocks?</label>
                                        <input 
                                            className="form-check-input" 
                                            type="checkbox" 
                                            value="" 
                                            checked={isInputDisabled}
                                            id="flexCheckDefault" 
                                            style={{marginLeft: 10, marginBottom: 2}}
                                            onChange={randomBlockToggle}
                                            />
                                    </div>
                                    <button className="btn btn-primary login-btn" disabled={btnDisabled} type="submit" onClick={isInputDisabled ? checkRandomBoxStatus : addSingleBlock}>
                                        {isInputDisabled ? 'Add Random Blocks' : 'Add Block'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    {/* </div> */}
            </div>
            <>
                <Modal show={isAlert} onHide={()=> setIsAlert(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>Alert</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>There are already some blocks in inventory. Do you want to add up to it..?</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=> setIsAlert(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={confirmAlert}>
                        Yes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
        
    )
}

export default AddBlock
