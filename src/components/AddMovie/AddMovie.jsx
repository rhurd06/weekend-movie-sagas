import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';


function addMovie () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [poster, setPoster]  = useState('');
    const [description, setDescription]  = useState('');
    const [genre, setGenre] = useState(0);

    useEffect(() => {
        dispatch({type: 'SET_MOVIE_GENRE'})
    }, []);
    const genres = useSelector(store => store.genres);

    const handleSubmit = event => {
        event.preventDefault();
        console.log(title, poster, description, genre);
        dispatch({type: 'ADD_MOVIE', 
        payload: {title: title, poster: poster, description: description, genre_id: genre}});
    }

    const click = () => {
        history.push('/');
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Movie Title" value={title} onChange={(event) => setTitle(event.target.value)} />
                <input type="text" placeholder="Movie Poster URL" value={poster} onChange={(event) => setPoster(event.target.value)}/>
                <input type="text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
                <select onChange={(event)=> setGenre(event.target.value)}>
                    <option>ChooseGenre</option>
                    {genres.map(item => {
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })}
                </select>
                {/* <button>Cancel</button> */}
                <button>Save</button>
            </form>
            <button onClick={click}>Cancel</button>
        </div>
    )
}

export default addMovie;