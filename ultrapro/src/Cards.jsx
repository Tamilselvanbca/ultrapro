import React from 'react';

const Cards = () => {
  const steps = [
    { id: 1, title: 'Initial Consultation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
    { id: 2, title: 'Planning and Design', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
    { id: 3, title: 'Execution and Management', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
    { id: 4, title: 'Evaluation Events', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.' },
  ];

  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <h6 className="text-warning text-uppercase text-start mb-3">How It’s Work</h6>
        <h1 className="text-start mb-5">Start Planning And Build The Event</h1>
        <div className="row">
          {steps.map((step) => (
            <div className="col-md-6 mb-4" key={step.id}>
             <div className="d-flex rounded-5 p-4 align-items-center" style={{ backgroundColor: 'rgba(13, 13, 13, 1)', height:'173px' }}>
                <div className="step-number text-dark  d-flex align-items-center justify-content-center me-3" 
                     style={{ 
                      width: '100px', height: '75px', fontWeight: 'bold', borderRadius:'30px',backgroundColor: 'rgba(255, 140, 23, 1)' }}>
                  {`0${step.id}`}
                </div>
                <div>
                  <h5 className="mb-2">{step.title}</h5>
                  <p className="text-secondary mb-0 ">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
