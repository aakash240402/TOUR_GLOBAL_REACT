import React from 'react';
import './BestPlaces.css';

const BestPlaces = () => {
  const places = [
    {
      id: 1,
      image: '/assets/images/1.jpg',
      heading: 'Holiday Tour',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      id: 2,
      image: '/assets/images/2.jpg',
      heading: 'New York',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      id: 3,
      image: '/assets/images/3.jpg',
      heading: 'London',
      content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
  ];

  return (
    <div className="best-places-container">
      <h1 className="bp-heading">BEST PLACES AROUND</h1>
      <p className="subheading">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there.</p>
      <div className="best-places-content">
      {places.map(place => (
        <div key={place.id} className="best-place-item">
          <img
            src={place.image}
            alt={`Place ${place.id}`}
            className="best-place-image"
          />
          <div className="best-place-content">
            <h3 className="best-content-heading">
              {place.heading}
            </h3>
            <p className="best-content-body">
              {place.content}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className="pagination-indicators">
        <span className="pagination-dot"></span>
        <span className="pagination-dot black"></span>
      </div>
    </div>
  );
};

export default BestPlaces;
