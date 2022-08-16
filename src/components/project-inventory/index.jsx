import React, { useState, useEffect } from "react";
import "./style.css";

const InventoryCard = ({ title, data, currentInvenotyItemId }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems]);

  //   Toggle block
  const toggleBlock = (item) => {
    // console.log(item.id);
    if (selectedItems.includes(item.id)) {
      const newSelectedItems = selectedItems.filter((v) => v !== item.id);
      setSelectedItems(newSelectedItems);
    } else setSelectedItems([...selectedItems, item.id]);
    currentInvenotyItemId(item);
  };
  // console.log(data);

  //   const toggleSelection = (item) => {
  //     //    setSelectedItems([
  //     //        ...selectedItems,
  //     //        item
  //     //    ])
  //     setIsChecked(!isChecked);
  //     console.log("toggle array", selectedItems);
  //     currentInvenotyItemId(item);
  //   };
  console.log("IS CHECKED::", isChecked);
  return (
    <div className="inventory-card-container">
      <h5>{title}</h5>
      {data &&
        data.map((v) => {
          return (
            <div
              key={v.id}
              className="inventory-single-block"
              style={{
                backgroundColor: `${
                  selectedItems.includes(v.id)
                    ? "#242424"
                    : v.available === false
                    ? "#9b9b9b"
                    : "#e1e1e1"
                }`,
                color: `${
                  selectedItems.includes(v.id)
                    ? "#fff"
                    : v.available === false
                    ? "#fff"
                    : "#4a2e23"
                }`,
                border: `${v.blocked ? "2px solid #962222" : "none"}`,
              }}
              onClick={() =>
                toggleBlock({
                  id: v.id,
                  isAvailable: v.available,
                  isBlocked: v.blocked,
                })
              }
            >
              {v.name}
              {/* <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                style={{ marginLeft: 10, marginBottom: 2 }}
                onClick={() =>
                  toggleSelection({
                    id: v.id,
                    isAvailable: v.available,
                    isBlocked: v.blocked,
                  })
                }
              /> */}
            </div>
          );
        })}
    </div>
  );
};

export default InventoryCard;
