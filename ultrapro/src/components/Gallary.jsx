import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Gallary = () => {
  const images = [
    './src/assets/Imgs/Rectangle 16 (1).png',
    './src/assets/Imgs/Rectangle 16 (2).png',
    './src/assets/Imgs/Rectangle 16 (3).png',
    './src/assets/Imgs/Rectangle 16 (4).png',
    './src/assets/Imgs/Rectangle 16.png',
    './src/assets/Imgs/Rectangle 17 (1).png',
    './src/assets/Imgs/Rectangle 17.png',
    './src/assets/Imgs/Rectangle 16 (3).png',
    './src/assets/Imgs/Rectangle 17.png',
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h2>Discover Gallery</h2>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#all">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#corporate">Corporate</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#group">Group</a>
          </li>
        </ul>
      </div>
      
      <div className="row">
  {images.map((image, index) => (
    <div className="col-md-4 mb-4" key={index}>
      <div className="card">
        <img 
          src={image} 
          className="card-img-top" 
          alt={`Gallery item ${index + 1}`} 
        />
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Gallary;