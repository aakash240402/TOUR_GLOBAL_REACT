import React from 'react';
import RouterHeaderComponent from './components/header/header';
import Navbar from './components/navbar/navbar';
import TravelOffers from './components/offers/TravelOffers';
import ThingsToDo from './components/thingstodo/ThingsToDo';
import BestPlaces from './components/bestplaces/BestPlaces';
import ItalyTravelGuide from './components/italy/italy';
import BlogComponent from './components/blog/BlogComponent';
import Footer from './components/footer/Footer';
import JourneyComponent from './components/journey/JourneyComponent';

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterHeaderComponent />
      <JourneyComponent />
      <TravelOffers />
      <ThingsToDo />
      <BestPlaces />
      <ItalyTravelGuide />
      <BlogComponent />
      <Footer />
    </div>
  );
}

export default App;