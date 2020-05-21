import React from 'react';
import './App.css';
import Header from './Header';
import MovieSlot from './MovieSlot';
import HonorableMentions from './HonorableMentions';
import Footer from './Footer';

function App() {
  const movieSlots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
  <div className="app">
    <Header />
    <div className="app-container">
      {movieSlots.map(item => ([
      <div key={item} className="movie-slot-container">
        <MovieSlot
          key={item}
          ranking={item}
          />
      </div>
      ]))}
    </div>
    <HonorableMentions />
    <Footer />
</div>
  );
}

export default App;
