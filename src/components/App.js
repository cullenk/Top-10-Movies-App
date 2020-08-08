import React from 'react';
import '../css/App.css';
import Header from './Header';
import HonorableMentionsList from './HonorableMentionsList';
import Footer from './Footer';
import MovieList from './MovieList';

function App() {
  const movieSlots = [
    {id: 1},
    {id: 2}, 
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10}
  ]

  return (
  <div className="app">
    <Header />
    <MovieList movieSlots={movieSlots} />
    <HonorableMentionsList />
    <Footer />
  </div>
  );
}

export default App;
