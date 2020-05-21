import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoviesToAdd from './MoviesToAdd';
import HonorableChosenMovie from './HonorableChosenMovie';

export default function HonorableMovieField() {

    let searchTerm = 'A';
    const [chosenMovie, setChosenMovie] = useState();
    const [movieList, setMovieList] = useState([]);
    const [movieDatabaseUrl, setMovieDatabaseUrl] = useState([`https://api.themoviedb.org/3/search/movie?api_key=e8876c41ca745bb2c3d29e38b0feeb4c&query=` + searchTerm]);
    const [searchContainerStatus, setSearchContainerStatus] = useState(false);
    const [movieChosen, setMovieChosen] = useState(false);
  

    useEffect(() => {
      axios.get(movieDatabaseUrl).then(res => {
          setMovieList(res.data.results.map(m => ({
            id: m.id,
            title: m.title,
            overview: m.overview,
            poster: m.poster_path ? 'https://image.tmdb.org/t/p/w400/' + m.poster_path : 'https://static.thenounproject.com/png/1174579-200.png',
            released: m.release_date,
            backdrop: m.backdrop_path ? 'https://image.tmdb.org/t/p/w400/' + m.backdrop_path : 'https://static.thenounproject.com/png/1174579-200.png'
          })
         ));
      });
    }, [movieDatabaseUrl]);

    function searchForMovie(e) {
        searchTerm = e.target.value;
        if (searchTerm === '') {
          return;
        } else {
          setMovieDatabaseUrl("https://api.themoviedb.org/3/search/movie?api_key=e8876c41ca745bb2c3d29e38b0feeb4c&query=" + searchTerm);
          console.log(movieDatabaseUrl);
        }
      }

      function toggleSearchContainer() {
        setSearchContainerStatus(!searchContainerStatus);
       }

       function toggleChosenMovie() {
        setMovieChosen(!movieChosen);
       }

       function movieClicked(e){
        let movieId = this;
        const filteredMovie = movieList.filter(movie => movie.id === movieId);
        const movieToDisplay = filteredMovie.length > 0 ? filteredMovie[0] : null;
        setChosenMovie(movieToDisplay);
        toggleSearchContainer();
        toggleChosenMovie();
      }

      function changeMovie(e) {
        toggleChosenMovie();
      }

    return (
        <div className="honorable-movie-field">

            {!movieChosen ? <input onClick={toggleSearchContainer} onChange={searchForMovie} type="text" placeholder="Add Movie..." /> : null }

          <div className="honorable-search-pop-up">
            {movieList.map(m => ([
            <MoviesToAdd
              key={m.id}
              id={m.id}
              title={m.title}
              searchContainerStatus={searchContainerStatus}
              movieClicked={movieClicked}
               />
              ]))}
          </div>
            
            {movieChosen ? <HonorableChosenMovie 
            key={chosenMovie.id}
            id={chosenMovie.id}
            title={chosenMovie.title}
            poster={chosenMovie.poster}
            changeMovie={changeMovie}
            /> : null}

        </div>
    )
}
