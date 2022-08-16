import React from 'react';
import './style.css'

const UserCard = ({ background, data }) => {
    // console.log('USERID::', data.id,);
    return (
        <>  
            <div className="user-data-sec" style={{ backgroundColor: background }} key={data.id}>
                <h2><span>Name: </span>{data.name}</h2>
                <h2><span>Email: </span>{data.email}</h2>
                <h2><span>Number: </span>{data.number}</h2>
                <h2><span>Project: </span>{data.project}</h2>
            </div>
        </>
    )
}

export default UserCard;
