import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <div>
    <div  style={{
        backgroundImage: `linear-gradient(to right, 
        rgba(0,0, 0, 1) 45%, 
        rgba(0, 0, 0, 0) 120%),  
        url("./src/assets/Imgs/fe93e2614ea076d205f88d4abc7f6554.gif")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '760px',
      }}>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid" >
            <img src="./src/assets/Imgs/Frame 1000005300.png" alt="Ultrapro" className="img-fluid" style={{ width: "150px" }} />
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Ecosystem</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Token</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Expo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-warning" href="#">Enhanced-Enterprises</a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-outline-light" type="button">Whitepaper</button>
            <button className="btn btn" style={{ backgroundColor: 'rgba(255, 140, 23, 1)'}} type="button">Contact us</button>
            <a href="#" className='px-2'>
              <img src="./src/assets/Imgs/Vector (1).png" alt="Settings" />
            </a>
          </div>
        </div>
      </nav>
      <div className="container text-start py-5 mt-3">
  <div className="row">
    <div className="col-12 ">
    <h6 className="text-white opacity-75">BEST EVENTS ORGANIZER</h6>
    </div>
    <div className="col-7 mt-3">
  <h1 className="text-white display-2"><strong>Unforgettable Events Organizing</strong></h1>
<p className='text-secondary col-9  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<button className='text-white px-5 py-4 mt-3 rounded-4 btn btn'style={{ backgroundColor: 'rgba(255, 140, 23, 1)'}}> 
     Our Services
</button>
</div>
  </div>
</div>
    </div>
    </div>
  );
};

export default Navbar;
