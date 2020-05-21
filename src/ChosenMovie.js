import React from 'react'

export default function ChosenMovie({ title, id, overview, poster, released, backdrop, changeMovie }) {
    
    const backdropStyle = {
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${backdrop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: '0',
        opacity: '.2'
    }

    function viewMore(){
        const moviePage = "https://themoviedb.org/movie/" + id;
        window.open(moviePage, '_blank');
    }

    return (
        <div className="chosen-movie-container">
            <img className="movie-poster" src={poster} alt="poster"></img>
            <div style={backdropStyle}></div>
                <div className="movie-content" id={id}>
                    <h1 className="movie-title">{title}</h1>
                    <span className="movie-release-date">Released: {released}</span>
                    <p className="movie-overview">{overview}</p>
                    <div className="buttons">
                        <button onClick={viewMore} className="view-more-button">View More</button>
                        <button onClick={changeMovie} className="change-movie-button">Change</button>
                    </div>
            </div>
        </div>
    )
}