import React from 'react';

export default function MoviesToAdd({ title, id, searchContainerStatus, movieClicked }) {

    const searchContainerDisplay = {
        display: searchContainerStatus ? 'block' : 'none',
    }

    return (
        <div className="search-title-container" style={searchContainerDisplay}>
           <span onClick={movieClicked.bind(id)} className="movie-title-option">{title}</span>
        </div>
    )
}



