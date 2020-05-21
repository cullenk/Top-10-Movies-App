import React from 'react'

export default function HonorableChosenMovie({ title, id, poster, changeMovie }) {

    function viewMore(){
        const moviePage = "https://themoviedb.org/movie/" + id;
        window.open(moviePage, '_blank');
    }

    return (
        <div className="honorable-movie-container">
            <img className="honorable-poster" src={poster} alt="poster"></img>
                <div className="honorable-movie-content" id={id}>
                    <h1 className="honorable-title">{title}</h1>
                    <div className="buttons">
                        <button onClick={viewMore} className="view-more-button">View More</button>
                        <button onClick={changeMovie} className="change-movie-button">Change</button>
                    </div>
            </div>
        </div>
    )
}