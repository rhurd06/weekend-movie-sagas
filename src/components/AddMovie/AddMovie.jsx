import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory} from 'react-router-dom';
// MUI imports
import { Button, Container, makeStyles, MenuItem, TextField } from "@material-ui/core";
// Styling imports
// import './AddMovie.css';

const useStyles = makeStyles(theme => ({
    root: {
        width: 350,
    },
    cancel: {
        marginLeft: 40
    }
}))

function addMovie () {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

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
        <Container className={classes.root}>
            <form onSubmit={handleSubmit} id="addMovieForm">
                <TextField
                    value={title}
                    label="Movie Title"
                    variant="filled"
                    required
                    fullWidth
                    onChange={(event) => setTitle(event.target.value)}
                />
                <br />
                <br />
                <TextField
                    value={poster}
                    label="Movie Poster URL"
                    variant="filled"
                    required
                    fullWidth
                    onChange={(event) => setPoster(event.target.value)}
                />
                <br />
                <br />
                <TextField
                    value={description}
                    label="Description"
                    multiline
                    variant="filled"
                    required
                    fullWidth
                    onChange={(event) => setDescription(event.target.value)} 
                />
                <br />
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
                <br />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    Save
                </Button>
                <Button
                    color="secondary"
                    variant="contained"
                    className={classes.cancel}
                    onClick={click}
                    >
                    Cancel
                </Button>
            </form>
        </Container>
    )
}

export default addMovie;