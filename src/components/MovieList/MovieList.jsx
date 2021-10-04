import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Material UI Imports
import { Card, CardContent, Container, Grid, makeStyles, 
    Typography } from '@material-ui/core';

// Import styling
import './MovieList.css'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: "lightgrey"
    },
    input: {
        height: 50,
        width: 500,
    },
    card: {
        backgroundColor: "#2DDBDE",
        marginRight: 15,
        marginTop: 15,
        marginBottom: 15
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
        <Container
            className={classes.container}
        >
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
                {movies.map(movie => {
                    return (
                        <Card 
                            key={movie.id}
                            className={classes.container} 
                        >
                            <CardContent
                                className={classes.card}
                            >
                            <img 
                                src={movie.poster} 
                                alt={movie.title}
                                onClick={() => goToDetails(movie)}
                            />
                            </CardContent>
                        </Card>
                    );
                })}
            </Grid>
        </Container>

    );
}

export default MovieList;