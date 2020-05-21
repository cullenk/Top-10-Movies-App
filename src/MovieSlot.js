import React from 'react';
import MovieField from './MovieField';  
import clapper from './clapper.png';

export default function MovieSlot({ ranking }) {

    return (
      <div id={ranking} className="movie-slot">
        <img className="clapper" src={clapper} alt="clapper"/>
        <h2 className="ranking">#{ranking}</h2>
            <MovieField />      
      </div>
    )
}
