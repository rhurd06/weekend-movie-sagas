import { useHistory } from 'react-router-dom';

function MovieDetails () {
    const history = useHistory();

    const handleSubmit = () => {
        history.push('/');
    };

    return (
        <div>
            <button onSubmit={handleSubmit}>Back to Movies List</button>
        </div>
    )
}

export default MovieDetails;