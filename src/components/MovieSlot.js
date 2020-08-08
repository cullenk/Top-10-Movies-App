import React from 'react';
import MovieField from './MovieField';  
import clapper from '../images/clapper.png';

export default function MovieSlot({ ranking }) {

    return (
      <div id={ranking} className="movie-slot">
        <img className="movie-slot__clapper" src={clapper} alt="clapper"/>
        <h2 className="movie-slot__ranking">#{ranking}</h2>
            <MovieField />      
      </div>
    )
}
