import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import InventoryCard from "../../components/project-inventory";
import Navbar from "../../components/navbar";
import projectLogo from "../../assets/logo/navbar-logo.png";
import {
  apartment_white,
  apartment_grey,
  floor_plan,
  floor_plan_two,
  gallery,
  galler_two,
  info,
  info_two,
  inventory,
  inventory_two,
  walkthrough,
  walkthrough_two,
} from "../../assets/icons";
import {
  data_eight,
  data_eleven,
  data_five,
  data_four,
  data_nine,
  data_one,
  data_seven,
  data_six,
  data_ten,
  data_three,
  data_two,
} from "../../dummy";
import { useHistory } from "react-router-dom";
import BackHandler from "../../components/back-handler";

// Importing databse from firestore
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { useUserContext } from "../../context/userContext";

import "./style.css";
import Loader from "../../components/loader";

const Inventory = () => {
  const history = useHistory();

  const { user } = useUserContext();

  const [inventoryData, setInventoryData] = useState({});
  const [currentInventoryItem, SetcurrentInventoryItem] = useState([]);
  const [loading, setloading] = useState(false);

  // const inventoryCollectionRef = db.collection('inventory').doc('RgOVyP2Bds1Bl4crpLI8').collection('level_one').get()
  // const inventoryCollectionRef = doc(db, "inventory", "RgOVyP2Bds1Bl4crpLI8")

  useEffect(() => {
    const getInventoryData = async () => {
      setloading(true);
      const inventoryCollectionRef = collection(db, "inventory");
      const q = query(
        inventoryCollectionRef,
        where("userId", "==", `${user.uid}`)
      );
      const result = await getDocs(q);
      const in_data = result.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

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

      const groupBy = function (array, key) {
        return array.reduce(function (rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };

      const resultData = groupBy(in_data, "level");
      console.log("sorted array::", in_data);
      setInventoryData(resultData);
      setloading(false);
    };
    getInventoryData();
  }, []);

  const updateInventoryItem = async (method, item) => {
    setloading(true);
    if (currentInventoryItem.length < 1) {
      alert("Please choose a block");
      setloading(false);
    } else if (currentInventoryItem.length < 2) {
      const inventoryDoc = doc(db, "inventory", item.id);
      const setSold = { available: false };
      const setAvailable = { available: true, blocked: false };
      const setBlock = { blocked: true };
      await updateDoc(
        inventoryDoc,
        method == "mark_sold"
          ? setSold
          : method == "mark_available"
          ? setAvailable
          : setBlock
      );
      window.location.reload(false);
    } else {
      alert("Select only one block at a time..!");
      window.location.reload(false);
      setloading(false);
    }

    console.log("currentInventoryItem::", currentInventoryItem);
  };

  return (
    <>
      <Navbar title="PROJECT INVENTORY" />
      <div className="container-sec container-sec-project-inventory">
        <div className="container">
          <div className="border-sec border-sec-project-home">
            <BackHandler />
            <div className="project-home-header inventory-header">
              <div className="header-title header-title-desktop">
                <div className="building-status-sec-one">SOLD</div>
                <div className="building-status-sec-two">AVAILABLE</div>
                <div className="building-status-sec-three">BLOCKED</div>
              </div>

              <div className="project-logo inventory-project-logo">
                <img src={projectLogo} alt="logo" />
                {/* <h3>Tower 1</h3> */}
              </div>
              <div className="project-info ">
                <div className="project-info-inner-row project-info-inner-row-first">
                  <div className="col-3">3 BHK</div>
                  <div className="col-3">
                    <img src={apartment_white} />
                  </div>
                  <div className="col-4">AVAILABLE</div>
                </div>
                <div className="project-info-inner-row">
                  <div className="col-3">4 BHK</div>
                  <div className="col-3">
                    <img src={apartment_grey} />
                  </div>
                  <div className="col-4">SOLD OUT</div>
                </div>
                {/* <div className="project-info-inner-row">
                                            <div className="col-3">2.5 BHK</div>
                                            <div className="col-3"><img src={apartment} /></div>
                                            <div className="col-4">AVAILABLE</div>
                                        </div>
                                        <div className="project-info-inner-row">
                                            <div className="col-3">3 BHK</div>
                                            <div className="col-3"><img src={apartment_grey} /></div>
                                            <div className="col-4">SOLD OUT</div>
                                        </div> */}
              </div>
              <div className="header-title header-title-mobile">
                <div className="building-status-sec-one">SOLD</div>
                <div className="building-status-sec-two">AVAILABLE</div>
                <div className="building-status-sec-three">Blocked</div>
                <div className="pricing-btn-sec">
                  <button
                    className="btn btn-primary login-btn pricing-btn"
                    type="submit"
                    onClick={() => history.push("/price-sheet")}
                  >
                    Pricing
                  </button>
                  <button
                    className="btn btn-primary login-btn pricing-btn"
                    type="submit"
                    onClick={() => history.push("/booking-form")}
                  >
                    Send Quote
                  </button>
                </div>
              </div>
            </div>
            {loading ? (
              <Loader loading={loading} />
            ) : (
              <div className="inventory-sec">
                <div className="project-home-menu project-inventory-menu">
                  <InventoryCard
                    title="Level 1"
                    data={inventoryData[1]}
                    currentInvenotyItemId={(item) =>
                      SetcurrentInventoryItem([...currentInventoryItem, item])
                    }
                  />
                  <InventoryCard
                    title="Level 2"
                    data={inventoryData[2]}
                    currentInvenotyItemId={(item) =>
                      SetcurrentInventoryItem([...currentInventoryItem, item])
                    }
                  />
                  <InventoryCard
                    title="Level 3"
                    data={inventoryData[3]}
                    currentInvenotyItemId={(item) =>
                      SetcurrentInventoryItem([...currentInventoryItem, item])
                    }
                  />
                  <InventoryCard
                    title="Level 4"
                    data={inventoryData[4]}
                    currentInvenotyItemId={(item) =>
                      SetcurrentInventoryItem([...currentInventoryItem, item])
                    }
                  />
                  <InventoryCard
                    title="Level 5"
                    data={inventoryData[5]}
                    currentInvenotyItemId={(item) =>
                      SetcurrentInventoryItem([...currentInventoryItem, item])
                    }
                  />
                  <InventoryCard
                    title="Level 6"
                    data={inventoryData[6]}
                    currentInvenotyItemId={(item) =>
                      SetcurrentInventoryItem([...currentInventoryItem, item])
                    }
                  />
                  <InventoryCard
                    title="Level 7"
                    data={inventoryData[7]}
                    currentInvenotyItemId={(item) =>
                      SetcurrentInventoryItem([...currentInventoryItem, item])
                    }
                  />
                  <InventoryCard
                    title="Level 8"
                    data={inventoryData[8]}
                    currentInvenotyItemId={(item) =>
                      SetcurrentInventoryItem([...currentInventoryItem, item])
                    }
                  />
                  <InventoryCard
                    title="Level 9"
                    data={inventoryData[9]}
                    currentInvenotyItemId={(item) =>
                      SetcurrentInventoryItem([...currentInventoryItem, item])
                    }
                  />
                  <InventoryCard
                    title="Level 10"
                    data={inventoryData[10]}
                    currentInvenotyItemId={(item) =>
                      SetcurrentInventoryItem([...currentInventoryItem, item])
                    }
                  />
                  <InventoryCard
                    title="Level 11"
                    data={inventoryData[11]}
                    currentInvenotyItemId={(item) =>
                      SetcurrentInventoryItem([...currentInventoryItem, item])
                    }
                  />
                </div>
                <div className="project-inventory-footer">
                  <button
                    className="btn btn-primary login-btn inventory-btn-1"
                    type="submit"
                    onClick={() =>
                      updateInventoryItem("mark_block", currentInventoryItem[0])
                    }
                  >
                    Block
                  </button>
                  <button
                    className="btn btn-primary login-btn inventory-btn-2"
                    type="submit"
                    onClick={() =>
                      updateInventoryItem("mark_sold", currentInventoryItem[0])
                    }
                  >
                    Mark as sold
                  </button>
                  <button
                    className="btn btn-primary login-btn inventory-btn-3"
                    type="submit"
                    onClick={() =>
                      updateInventoryItem(
                        "mark_available",
                        currentInventoryItem[0]
                      )
                    }
                  >
                    Make available
                  </button>
                  {/* <button className="btn btn-primary login-btn inventory-btn-5" type="submit">
                                            Emi Calculator
                                        </button> */}
                  {/* <button className="btn btn-primary login-btn inventory-btn-4" type="submit" onClick={()=>history.push('/price-sheet')}>
                                            Pricing
                                        </button> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
