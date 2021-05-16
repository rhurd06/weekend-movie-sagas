import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function MovieDetails () {
    const history = useHistory();
    const details = useSelector(store => store.detailsReducer);
    const dispatch = useDispatch();

    // let {id} = useParams();

    useEffect(() => {
        // dispatch({type: 'SET_MOVIE_DETAILS', payload: id});
    }, []);


    const handleSubmit = () => {
        console.log(`clicked back to ml`);
        dispatch({type: 'CLEAR_DETAILS', payload: []});
        history.push('/');
    };

    return (
        <div>
            <p>
                {details.map(details => {
                    return (
                        <div key={details.id}>
                            <h3>{details.title}</h3>
                            <img src={details.poster} alt={details.title} />
                            {details.description}
                            {details.genre}
                        </div>
                    )
                })}
            </p>
            <button onClick={()=> handleSubmit()}>Back to Movies List</button>
        </div>
    )
}

export default MovieDetails;