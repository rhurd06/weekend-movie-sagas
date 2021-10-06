import {HashRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';

import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <AppBar position="relative">
        <Toolbar className="appBar">
          <MovieFilterIcon align="center" sx={{ fontSize: 80 }} />
          <Typography align="center" variant="h3">The Movies Saga!</Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addMovie">Add Movie</Link>
          </li>
        </ul>        
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movieDetails/:id" component={MovieDetails} />
        <Route exact path="/addMovie" component={AddMovie} />
      </Router>
    </div>
  );
}


export default App;
