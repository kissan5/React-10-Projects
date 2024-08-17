import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your favourite food here</h2>
        <p>
          Explore our diverse menu brimming with mouthwatering dishes, each
          crafted from the finest ingredients with culinary finesse. We're
          dedicated to delighting your taste buds and transforming every meal
          into a memorable dining adventure.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
