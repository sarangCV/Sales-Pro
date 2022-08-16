import React, { useState } from 'react';
import './style.css'

const AdminInventoryCard = ({title, data, currentInvenotyItemId}) => {

    const [isChecked, setIsChecked] = useState(false)
    const [selectedItems, setSelectedItems] = useState([])

    // console.log(data);
    const toggleSelection = (item) => {
    //    setSelectedItems([
    //        ...selectedItems,
    //        item
    //    ])
        setIsChecked(!isChecked)
        console.log('toggle array', selectedItems);
        currentInvenotyItemId(item)
    }
    console.log('IS CHECKED::', isChecked);
    return (
        <div className="admin-inventory-card-container">
            <h5>{title}</h5>
            {data && data.map((v) => {
                return(
                    <div key={v.id} className="admin-inventory-single-block" style={{ backgroundColor: `${v.available === false ? '#9b9b9b' : '#e1e1e1' }`, color: `${v.available === false ? '#fff' : '#4a2e23' }`, border: `${v.blocked ? '2px solid #962222' : 'none' }` }}>
                        {v.name} 
                    </div>
                )
            })}
        </div>
    )
}

export default AdminInventoryCard;


