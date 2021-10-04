import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';
// MUI imports
import { Button, Container, MenuItem, TextField } from "@material-ui/core";
// Styling imports
import './AddMovie.css';


function addMovie () {

    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [poster, setPoster]  = useState('');
    const [description, setDescription]  = useState('');
    const [genre, setGenre] = useState();

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
                    fullWidth
                    onChange={(event) => setTitle(event.target.value)}
                />
                <br />
                <TextField
                    value={poster}
                    label="Movie Poster URL"
                    // className={}
                    variant="filled"
                    required
                    fullWidth
                    onChange={(event) => setPoster(event.target.value)}
                />
                <br />
                <TextField
                    value={description}
                    label="Description"
                    multiline
                    // className={}
                    variant="filled"
                    required
                    fullWidth
                    onChange={(event) => setDescription(event.target.value)} 
                />
                <br />
                <TextField
                    select
                    form="addMovieForm"
                    label="Choose Genre"
                    value={genre}
                    variant="filled"
                    required
                    fullWidth
                    onChange={(event)=> setGenre(event.target.value)}
                >
                    {genres.map(item => {
                        return (
                        <MenuItem
                            key={item.id} 
                            value={item.id}
                        >
                            {item.name}
                        </MenuItem>
                        )
                    })}
                </TextField>
                <br />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    Save
                </Button>
            </form>
            <Button
                color="secondary"
                variant="contained"
                onClick={click}
            >
                Cancel
            </Button>
        </Container>
    )
}

export default addMovie;