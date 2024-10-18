import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Service = () => {
  return (
    <div className='bg-dark p-5'>
      <div className="row">
        <div className="col-md-6">
        <div
  className="rounded-4 text-dark d-flex flex-column justify-content-center align-items-center p-4 text-center mb-4"
  style={{ height: '725px', backgroundColor: 'rgba(255, 191, 126, 1)' }}
>
  <h1 className="display-2 fw-bold text-start mb-4">
    WHAT DO YOU PLAN? WE WILL LEND YOU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A HAND
  </h1>
  <div className='col '>
  <button className="btn btn-dark mt-3 px-5 py-3 fs-4">Get Started</button>
  <button className="btn btn-dark mt-3 px-5 py-3 mx-5 fs-4 border" style={{ backgroundColor: 'rgba(255, 191, 126, 1)'}} >Learn More</button>
</div>
</div>

           </div>

        <div className="col-md-6">
          <div className="ratio ratio-16x9 mb-3" >
            <img src=".\src\assets\Imgs\placeholder.png" alt="" />
          </div>
          <h1 className='text-light px-5 pt-4'>Services</h1>
          <div className="d-flex justify-content-around mt-5 text-light">
            <div className="text-center">
              <i className="bi bi-gem display-4"></i>
              <p className='p-4 fs-3'>Wedding Organizer</p>
            </div>
            <div className="text-center">
              <i className="bi bi-people display-4"></i>
              <p className='p-4 fs-3' >Social Gatherings</p>
            </div>
            <div className="text-center">
              <i className="bi bi-briefcase display-4"></i>
              <p className='p-4 fs-3'>Corporate Events</p>
            </div>
          </div>

        </div>
        
        
      </div>
    </div>
  );
}

export default Service;
