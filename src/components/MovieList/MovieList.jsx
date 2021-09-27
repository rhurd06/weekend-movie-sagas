import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Material UI Imports
import { Card, CardContent, Container, Grid, makeStyles, Typography } from '@material-ui/core';

// Import styling
import './MovieList.css'

const useStyles = makeStyles(theme => ({
    input: {
        height: 50,
        width: 500,
        marginRight: 15,
    }
}));

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    // to get movie list 
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
        <Container>
            <Typography
            align='center'
            variant='h1'
            >
                MovieList
            </Typography>
            <Grid
                container
                align='center'
            >
            {/* <section className="movies"> */}
                {movies.map(movie => {
                    return (
                        <Card 
                            key={movie.id}
                            className={classes.root} 
                        >
                            <CardContent>
                            {/* <h3>{movie.title}</h3> */}
                            <img 
                                src={movie.poster} 
                                alt={movie.title}
                                onClick={() => goToDetails(movie)}
                            />
                            </CardContent>
                        </Card>
                    );
                })}
            {/* </section> */}
            </Grid>
        </Container>

    );
}

export default MovieList;