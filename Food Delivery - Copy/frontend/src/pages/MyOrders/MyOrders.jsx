import React, { useState, useContext, useEffect } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null); // for tracking toggle

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  const toggleTrack = (index) => {
    setActiveOrder(activeOrder === index ? null : index);
  };

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => (
          <div key={index} className="my-orders-order">
            <img src={assets.parcel_icon} alt="" />
            <p>
              {order.items.map((item, idx) =>
                idx === order.items.length - 1
                  ? `${item.name}x${item.quantity}`
                  : `${item.name}x${item.quantity}, `
              )}
            </p>
            <p>{order.amount}.00</p>
            <p>Items: {order.items.length}</p>
            <p>
              <span>&#x25cf;</span>
              <b>{order.status}</b>
            </p>
            <button onClick={() => toggleTrack(index)}>
              {activeOrder === index ? "Hide Tracking" : "Track Order"}
            </button>

            {/* Tracking details */}
            {activeOrder === index && (
              <div className="tracking-details">
                <p><b>Order ID:</b> {order._id}</p>
                <p><b>Status:</b> {order.status}</p>
                <p><b>Placed on:</b> {new Date(order.date).toLocaleString()}</p>
                {/* You can add more status steps here */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
