import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Material UI Imports
import { Card } from '@mui/material/Card';

import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    
    
    const movies = useSelector(store => store.movies);

    //bring user to details page with info on specific movie
    const goToDetails = (movie) => {
        console.log('clicked');
        dispatch({type: 'SET_MOVIE_DETAILS', payload: movie.id});
        history.push(`/movieDetails/${movie.id}`);
    }

    //show list of all movies
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={() => goToDetails(movie)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;