import React, { useState, useEffect } from "react";
import MovieSlot from "./MovieSlot";

export default function MovieList({ movieSlots }) {
    return (
    <div className="movie-list">
      {movieSlots.map(slot => ([
        <MovieSlot
          key={slot.id}
          ranking={slot.id}
          />
      ]))}
    </div>
    )
}
