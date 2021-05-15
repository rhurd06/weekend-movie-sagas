import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {useEffect} from 'react';


function MovieDetails () {
    const history = useHistory();
    const details = useSelector(store => store.details);
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        dispatch({type: 'SET_MOVIE_DETAILS'});
    }, []);


    const handleSubmit = () => {
        console.log(`clicked back to ml`);
        history.push('/');
    };

    return (
        <div>
            <p>{id}</p>
            <button onClick={()=> handleSubmit()}>Back to Movies List</button>
        </div>
    )
}

export default MovieDetails;