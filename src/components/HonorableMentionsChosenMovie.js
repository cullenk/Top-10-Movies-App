import React from 'react'

export default function HonorableMentionsChosenMovie(props) {

    const {
        title,
        id,
        poster,
        changeMovie
    } = props

    function viewMore(){
        const moviePage = "https://themoviedb.org/movie/" + id;
        window.open(moviePage, '_blank');
    }

    return (
        <div className="honorable-mentions-chosen-movie__container">
            <img className="honorable-mentions-chosen-movie__poster" src={poster} alt="poster"></img>
            <div className="honorable-mentions-chosen-movie__content" id={id}>
                <h1 className="honorable-mentions-chosen-movie__title">{title}</h1>
                <div className="buttons">
                    <button onClick={viewMore} className="view-more-button">View More</button>
                    <button onClick={changeMovie} className="change-movie-button">Change</button>
                </div>
            </div>
        </div>
    )
}