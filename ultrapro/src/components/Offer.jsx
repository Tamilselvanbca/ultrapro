import React from 'react';

const Offer = () => {
  return (
    <div
      className="py-5"
      style={{ backgroundColor: 'rgba(228, 228, 228, 1)' }}
    >
      <div className="row justify-content-between align-items-center m-5">
        <div className="col-md-7 text-start mb-4 mb-md-0">
          <h2 className="display-3 fw-bolder">
            20% OFF Wedding Events For Limited Sale
          </h2>
          <p className="lead mt-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="btn btn-lg rounded-5 mt-3" style={{height:'55px', width:'240px', backgroundColor: 'rgba(255, 140, 23, 1)' }}>CLAIM DISCOUNT</button>
        </div>
        <div className="col-md-4">
          <img
            src="./src/assets/Imgs/fill.png"
            alt="Wedding Event"
            className="img-fluid rounded"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
