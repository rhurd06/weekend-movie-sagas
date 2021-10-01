import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Button, Typography } from '@material-ui/core';


function MovieDetails () {
    const history = useHistory();
    const details = useSelector(store => store.details);
    const dispatch = useDispatch();

    let {id} = useParams();

    //on page load get movie details
    useEffect(() => {
        dispatch({type: 'SET_MOVIE_DETAILS', payload: id});
    }, []);

//clear the detail page 
//bring user back to home page
    const handleSubmit = () => {
        console.log(`clicked back to movieList`);
        dispatch({type: 'CLEAR_DETAILS', payload: []});
        history.push('/');
    };

    return (
        <div>
            <div>
                {details.map(details => {
                    return (
                        <div key={details.id}>
                            <Typography
                                align="center"
                                variant="h2"
                            >{details.title}
                            </Typography>
                            <ul>
                                {details.genres.map(genre => {
                                    return(
                                        <li>{genre}</li>
                                    )
                                })}
                            </ul>
                            <img src={details.poster} alt={details.title} />
                            <Typography
                                align="center"
                                variant="h6"
                            >
                                {details.description}
                            </Typography>
                        </div>
                    )
                })}
            </div>
            <Button
                color="primary"
                variant="contained"
                onClick={()=> handleSubmit()}
            >
                Back to Movies
            </Button>
            {/* <button onClick={()=> handleSubmit()}>Back to Movies List</button> */}
        </div>
    )
}

export default MovieDetails;