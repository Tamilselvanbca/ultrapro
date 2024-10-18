import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Events = () => {
  return (
    <div className="container-fluid bg-dark text-white p-5">
      <div className="container">
        <div className="row pt-5">
          {/* Left Column */}
          <div className="col-lg-6 mb-5">
            <h6 className="text-warning">NOTHING SPECIAL WITHOUT YOU</h6>
            <h2 className="display-5 fw-bold">
              Our 2024 Sweet Moment
            </h2>
            <ul className="list-unstyled mt-4">
              <li>
                <button className="btn btn-outline-dark opacity-75 btn-sm w-100 mb-3 text-center text-secondary fs-5">
                  Meet
                </button>
              </li>
              <li>
                <button className="btn btn-outline-dark opacity-75 btn-sm w-100 mb-3 text-center text-secondary fs-5">
                  UltraPro Event
                </button>
              </li>
              <li>
                <button className="btn btn-secondary btn-sm w-100 mb-3 text-center text-warning p-2 fs-5">
                  Probinair Launch Event
                </button>
              </li>
              <li>
                <button className="btn btn-outline-dark opacity-75 btn-sm w-100 mb-3 text-center text-secondary fs-5">
                  Launch
                </button>
              </li>
              <li>
                <button className="btn btn-outline-dark opacity-75 btn-sm w-100 mb-3 text-center text-secondary fs-5">
                  Exchange Announcement
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="ratio ratio-16x9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/example-video"
                title="Probinair Launch"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-3">
              Probinair: Grand Launching Ceremony – 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
