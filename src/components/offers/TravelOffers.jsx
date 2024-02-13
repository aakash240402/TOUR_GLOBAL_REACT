import React from 'react';
import './TravelOffers.css';

const TravelOffers = () => {
  const offers = [
    {
      id: 1,
      image: '/assets/icon/travel-icon.png',
      heading: 'Different Countries',
      content: 'There are many variations of passages of Lorem Ipsum',
    },
    {
      id: 2,
      image: '/assets/icon/travel-icon2.png',
      heading: 'Mountain Tours',
      content: 'There are many variations of passages of Lorem Ipsum',
    },
    {
      id: 3,
      image: '/assets/icon/travel-icon3.png',
      heading: 'Bus Tours',
      content: 'There are many variations of passages of Lorem Ipsum',
    },
    {
      id: 4,
      image: '/assets/icon/travel-icon4.png',
      heading: 'Summer Rest',
      content: 'There are many variations of passages of Lorem Ipsum',
    },
  ];

  return (
    <div className="travel-offers-container">
      <h1 className="h">SELECT OFFERS FOR TRAVELLING</h1>
      <p className="subheading">It is a long established fact that reader will be distracted by the readable content of a page when looking at its layout.</p>
      <div className="travel-offers-content">
        {offers.map(offer => (
          <div key={offer.id} className="offer-item">
            <img
              src={offer.image}
              alt={`Offer ${offer.id}`}
              className="offer-image"
            />
            <div className="offer-content">
              <h3 className="content-heading">
                {offer.heading}
              </h3>
              <p className="content-body">
                {offer.content}
              </p>
              <button className="read-more-button">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelOffers;
