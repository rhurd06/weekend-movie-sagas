import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';

import './AddMovie.css';


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
        setTitle('');
        setPoster('');
        setDescription('');
    }

    const click = () => {
        history.push('/');
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="title" placeholder="Movie Title" value={title} onChange={(event) => setTitle(event.target.value)} />
                <input type="text" className="poster" placeholder="Movie Poster URL" value={poster} onChange={(event) => setPoster(event.target.value)}/>
                <input type="text" className="description" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
                <select className="genres" onChange={(event)=> setGenre(event.target.value)}>
                    <option>ChooseGenre</option>
                    {genres.map(item => {
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })}
                </select>
                <br />
                <button className="saveButton">Save</button>
            </form>
            <button className="cancelButton" onClick={click}>Cancel</button>
        </div>
    )
}

export default addMovie;