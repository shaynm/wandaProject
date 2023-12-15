import React, { useState } from "react";
import "./CouponComponent.css";

const CouponComponent = () => {
  const [unpacked, setUnpacked] = useState(false);

  const handleButtonClick = () => {
    setUnpacked(!unpacked);
  };

  return (
    <div
      className={`button-wrapper ${unpacked ? "unpacked" : ""}`}
      id="present"
    >
      <button
        className="present-button background"
        role="button"
        onClick={handleButtonClick}
      >
        Click Me!
      </button>
      <div className="present-wrapper">
        <h2>25% off</h2>
        <p>
          Coupon: <strong>wanda25</strong>
        </p>
      </div>
    </div>
  );
};

export default CouponComponent;
