import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Content = () => {
  return (
    <div className="container-fluid bg-dark text-light ">
         <h6 className="text-uppercase text-center text-secondary "> Special Show</h6>
          <h1 className="display-5 text-center "><strong>Charlie Putra</strong></h1>
          <h2 className="mb-4 display-5 text-center"><strong>Love for Everyone</strong></h2>
      <div className="row align-items-center py-5">
        <div className="col-md-3 px-5 mb-5 pb-5 text-start text-secondary">
          <p>
          At only 29 years old, Charlie Puth has proven to be one of industry’s most consistent hitmakers and sought-after collaborators. Puth has amassed eight multi-platinum singles, four GRAMMY nominations, two Billboard Music Awards.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src=".\src\assets\Imgs\Frame 1000005344.png"
            alt="Event Location"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-3 text-end text-secondary mt-5 pt-5 px-5">
        <p>
        Was RIAA certified gold only four days after its release and has logged five billion streams worldwide.In 2020, Puth’s collaboration with Gabby Barrett on their “I Hope” Remix earned him his fourth top 10 track on the Billboard Hot 100 and hit number one.
        </p>
        </div>
      </div>

    </div>
  );
};

export default Content;
