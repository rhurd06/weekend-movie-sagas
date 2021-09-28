import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';
// MUI imports
import { Button, Container, InputLabel, MenuItem, Select, TextField, 
    Typography } from "@material-ui/core";
// Styling imports
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
        dispatch({type: 'ADD_MOVIE', 
        payload: {title: title, poster: poster, description: description, genre_id: genre}});
        setTitle('');
        setPoster('');
        setDescription('');
        setGenre('');
    }

    const click = () => {
        history.push('/');
    };

    return(
        <Container>
            <form onSubmit={handleSubmit} id="addMovieForm">
                <TextField
                    value={title}
                    label="Movie Title"
                    // className={}
                    variant="filled"
                    required
                    onChange={(event) => setTitle(event.target.value)}
                />
                <TextField
                    value={poster}
                    label="Movie Poster URL"
                    // className={}
                    variant="filled"
                    required
                    onChange={(event) => setPoster(event.target.value)}
                />
                <TextField
                    value={description}
                    label="Description"
                    // className={}
                    variant="filled"
                    required
                    onChange={(event) => setDescription(event.target.value)} 
                />
                {/* <InputLabel>Choose Genre</InputLabel>
                <Select
                    form="addMovieForm"
                    onChange={(event)=> setGenre(event.target.value)}
                    value={genre}
                    variant="filled"
                >
                    {genres.map(item => {
                        return 
                        <MenuItem
                            key={item.id} 
                            value={item.id}
                        >
                            {item.name}
                        </MenuItem>
                    })}
                </Select> */}
                <select className="genres">
                    <option>ChooseGenre</option>
                    {genres.map(item => {
                        return <option key={item.id} value={item.id}>{item.name}</option>
                    })}
                </select>
                <br />
                <button className="saveButton">Save</button>
            </form>
            <button className="cancelButton" onClick={click}>Cancel</button>
        </Container>
    )
}

export default addMovie;