import React from 'react';
import './ItalyTravelGuide.css'; // Import CSS file

const ItalyTravelGuide = () => {
  return (
    <div className="italy-travel-guide-container">
      <h1 className="italy-travel-guide-heading">
        ITALY TRAVEL GUIDE
      </h1>
      <p className="italy-travel-guide-paragraph">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there
      </p>
      <img 
        src="/assets/images/Amazing.jpg" 
        alt="Italy" 
        className="italy-travel-guide-image" 
      />
      <div className="italy-travel-guide-buttons">
        <button>Book Now</button>
        <button>Get More</button>
      </div>
    </div>
  );
};

export default ItalyTravelGuide;
