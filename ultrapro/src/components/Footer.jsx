import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-light py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src="./src/assets/Imgs/Frame (3).png" alt="" />
              <p>We offer a wide range of services to help you achieve your goals.</p>
            </div>
            <div className="col-md-2 ">
              <h6 className='fs-2'>Explore</h6>
              <ul className="list-unstyled">
                <li className="mt-3">
                  <a href="#home" className="text-light text-decoration-none">UPRO Explorer</a>
                </li>
                <li className="mt-3">
                  <a href="#services" className="text-light text-decoration-none">Exchange</a>
                </li>
                <li className="mt-3">
                  <a href="#about" className="text-light text-decoration-none">Wallet</a>
                </li>
                <li className="mt-3">
                  <a href="#contact" className="text-light text-decoration-none">DeFi</a>
                </li>
                <li className="mt-3">
                  <a href="#contact" className="text-light text-decoration-none">Payments</a>
                </li>
                <li className="mt-3">
                  <a href="#contact" className="text-light text-decoration-none">NFT</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <h6 className='fs-2'>Build</h6>
              <ul className="list-unstyled">
                <li className="mt-3">
                  <a href="#apps" className="text-light text-decoration-none">Expo</a>
                </li>
                <li className="mt-3">
                  <a href="#websites" className="text-light text-decoration-none">Whitepaper</a>
                </li>
                <li className="mt-3">
                  <a href="#ecommerce" className="text-light text-decoration-none">Service</a>
                </li>
                <li className="mt-3">
                  <a href="#ecommerce" className="text-light text-decoration-none">Token</a>
                </li>
                <li className="mt-3">
                  <a href="#ecommerce" className="text-light text-decoration-none">Staking</a>
                </li>
                <li className="mt-3">
                  <a href="#ecommerce" className="text-light text-decoration-none">Events</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <h6 className='fs-2'>Community</h6>
              <ul className="list-unstyled">
                <li className="mt-3">
                  <a href="#twitter" className="text-light text-decoration-none">Save Crypto</a>
                </li>
                <li className="mt-3">
                  <a href="#facebook" className="text-light text-decoration-none">Telegram</a>
                </li>
                <li className="mt-3">
                  <a href="#instagram" className="text-light text-decoration-none">Instagram</a>
                </li>
                <li className="mt-3">
                  <a href="#instagram" className="text-light text-decoration-none">Instagram</a>
                </li>
                <li className="mt-3">
                  <a href="#instagram" className="text-light text-decoration-none">Facebook</a>
                </li>
                <li className="mt-3">
                  <a href="#instagram" className="text-light text-decoration-none">X</a>
                </li>
                <li className="mt-3">
                  <a href="#instagram" className="text-light text-decoration-none">Medium</a>
                </li>
              </ul>
            </div>

            <div className="col-md-2">
              <h6 className='fs-2'>About</h6>
              <ul className="list-unstyled">
                <li className="mt-3">
                  <a href="#privacy" className="text-light text-decoration-none">Privacy Policy</a>
                </li>
                <li className="mt-3">
                  <a href="#terms" className="text-light text-decoration-none">Terms of Use</a>
                </li>
                <li className="mt-3">
                  <a href="#contact" className="text-light text-decoration-none">Careers</a>
                </li>
                <li className="mt-3">
                  <a href="#contact" className="text-light text-decoration-none">Contact Us</a>
                </li>
                <li className="mt-3">
                  <a href="#contact" className="text-light text-decoration-none">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
