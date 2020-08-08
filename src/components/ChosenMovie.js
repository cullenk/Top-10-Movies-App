import React from 'react';

export default function ChosenMovie(props) {
    
    const {
        title,
        id,
        overview,
        poster,
        released,
        backdrop,
        changeMovie
    } = props

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
        <div className="chosen-movie__container">
            <img className="chosen-movie__poster" src={poster} alt="poster"></img>
            <div style={backdropStyle}></div>
            <div className="chosen-movie__content" id={id}>
                <h1 className="chosen-movie__title">{title}</h1>
                <span className="chosen-movie__release-date">Released: {released}</span>
                <p className="chosen-movie__overview">{overview}</p>
                <div className="button__container">
                    <button onClick={viewMore} className="button button__view-more">View More</button>
                    <button onClick={changeMovie} className="button button__change">Change</button>
                </div>
            </div>
        </div>
    )
}