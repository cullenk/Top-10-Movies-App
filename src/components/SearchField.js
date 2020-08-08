import React from 'react';

export default function SearchField({ title, id, searchContainerStatus, movieClicked }) {

    const searchContainerDisplay = {
        display: searchContainerStatus ? 'block' : 'none',
    }

    return (
        <div className="search-field__title-container" style={searchContainerDisplay}>
           <span onClick={movieClicked.bind(id)} className="search-field__title-option">{title}</span>
        </div>
    )
}



