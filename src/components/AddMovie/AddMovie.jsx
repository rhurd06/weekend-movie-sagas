import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function addMovie () {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [poster, setPoster]  = useState('');
    const [description, setDescription]  = useState('');

    const genres = useSelector(store => store.genres);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_MOVIE', payload: {title: title, poster: poster, description: description, genre_id: genres}})
    }

    useEffect(() => {
        dispatch({type: 'SET_MOVIE_GENRE'})
    }, []);

    return(
        <div>
            <form onClick={handleSubmit}>
                <input type="text" placeholder="Movie Title" value={title} onChange={(event) => setTitle(event.target.value)} />
                <input type="text" placeholder="Movie Poster URL" value={poster} onChange={(event) => setPoster(event.target.value)}/>
                <input type="text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)} />
                <select>
                    {genres.map(item => {
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })}
                </select>
                {/* <button>Cancel</button> */}
                <button>Save</button>
            </form>
        </div>
    )
}

export default addMovie;