import React, { useEffect, useState } from 'react';
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

import { person, login, quote, customer, meeting, screens, unit } from '../../../assets/icons';

import UserCard from '../../../components/admin/user-card';
import Loader from '../../../components/loader';

import { collection, getDocs, query, where, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

import './style.css'
import InventoryCard from '../../../components/project-inventory';
import AdminInventoryCard from '../../../components/admin/inventory-card';
import { useUserContext } from '../../../context/userContext';

const AdminData = () => {

    const history = useHistory();

    const { user } = useUserContext()
    const [loading, setloading] = useState(false)
    const [customers, setCustomers] = useState([])
    const [inventoryData, setInventoryData] = useState({});
    const [currentInventoryItem, SetcurrentInventoryItem] = useState([])

    useEffect(() => {
        getUsers()
        getInventoryData()
    }, [])

    const getUsers = async () => {
        console.log('user id from admin data', user.uid);
        setloading(true)
        const customerCollectionRef = collection(db, 'customers');
        const q = query(customerCollectionRef, where('userId', '==', `${user.uid}`))
        const result = await getDocs(q);
        const data = result.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
        setCustomers(data)
        setloading(false)
       
        console.log('admin data', result)
    }

    const getInventoryData = async () => {
        setloading(true)
        const inventoryCollectionRef = collection(db, 'inventory');
        const q = query(inventoryCollectionRef, where('userId', '==', `${user.uid}`))
        const result = await getDocs(q);
        const in_data = result.docs.map((doc) => ({ ...doc.data(), id: doc.id}))

        // sorting the array
        in_data.sort((a, b) => {
            let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });

        const groupBy = function(array, key) {
            return array.reduce(function(rv, x) {
              (rv[x[key]] = rv[x[key]] || []).push(x);
              return rv;
            }, {});
          };

        const resultData = groupBy(in_data, 'level')
        setInventoryData(resultData)
        setloading(false)
        console.log('admin inventory data', resultData);
        }
    const users = [1,2,3,4,5,6]

    function getRandomColor() {
        const colors = [
            'F4A261', 
            'c5a65c', 
            '2A9D8F', 
            'E76F51', 
            'db8f9e', 
            '73a0db', 
            'EE6C4D', 
            '84a98c', 
            '488cbf', 
            'd7909a', 
            '739f4e', 
            '9f86c0', 
            'ab882f',
            'a58a8f',
            'c05299',
            '6b9db5'
        ]
        var color = '#';
        color += colors[Math.floor(Math.random() * colors.length)];
        return color;
    }

    return (
        <>
            <Navbar title="Customer entry"/>
            <div className="container-sec container-sec-admin">
            {loading ? <Loader loading={loading}/> : 
                <div className="border-sec border-sec-admin">
                <BackHandler/>
                {/* <div className="customer-title mobile-entry-title">
                    <h3>Enter the mobile number</h3>
                </div> */}
                <div className="customer-form-sec admin-content-sec">
                    <div className="row admin-content-row">
                        <div className="col-lg-6">
                        <h1>Customers List</h1>
                            <div className="admin-data-sec-one">
                                {customers.map((v) => {
                                    return (
                                        <UserCard background={getRandomColor()} data={v}/>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <h1>Inventory Details</h1>
                            <div className="admin-data-sec-two">
                            
                            <div className='inventory-sec'>
                                    <div className="admin-inventory-status-sec">
                                        <div className="admin-inventory-status-one">
                                            <div className="admin-inventory-status-one-inner"></div>
                                            SOLD
                                        </div>
                                        <div className="admin-inventory-status-two">
                                            <div className="admin-inventory-status-two-inner"></div>
                                            AVAILABLE
                                        </div>
                                        <div className="admin-inventory-status-three">
                                            <div className="admin-inventory-status-three-inner"></div>
                                            BLOCKED
                                        </div>
                                    </div>
                                    <div className="project-home-menu project-home-menu-admin">
                                        <AdminInventoryCard title="Level 1" data={inventoryData[1]}/>
                                        <AdminInventoryCard title="Level 2" data={inventoryData[2]}/>
                                        <AdminInventoryCard title="Level 3" data={inventoryData[3]}/>
                                        <AdminInventoryCard title="Level 4" data={inventoryData[4]}/>
                                        <AdminInventoryCard title="Level 5" data={inventoryData[5]}/>
                                        <AdminInventoryCard title="Level 6" data={inventoryData[6]}/>
                                        <AdminInventoryCard title="Level 7" data={inventoryData[7]}/>
                                        <AdminInventoryCard title="Level 8" data={inventoryData[8]}/>
                                        <AdminInventoryCard title="Level 9" data={inventoryData[9]}/>
                                        <AdminInventoryCard title="Level 10" data={inventoryData[10]}/>
                                        <AdminInventoryCard title="Level 11" data={inventoryData[11]}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                
                
                </div>
                </div>
            }
                        
                    {/* </div> */}
                
            </div>
        </>
        
    )
}

export default AdminData

