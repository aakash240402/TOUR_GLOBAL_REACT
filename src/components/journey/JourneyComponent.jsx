import React from 'react';
import './JourneyComponent.css';

const JourneyComponent = () => {
  return (
    <div>
    <div className="container">
      <h1 className="heads">OUR JOURNEY OF TRAVEL</h1>
      <p className="subheading1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
      <p className= "subheading1">standard dummy text ever since the 1500s.</p>
    </div>
    <div className="blue-gradient-box">
        <div className="white-box">
          <div className="paragraph-container">
            <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
          </div>
        </div>
        <div className="image-overlay">
          <img src="/assets/images/plane-img.png" alt="plane" className="centered-image" />
        </div>
      </div>
      <div className="button-container">
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
}

export default JourneyComponent;
