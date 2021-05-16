import {HashRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import MovieList from '../MovieList/MovieList';
// import MovieDetails from '../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
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
        {/* <Route exact path="/movieDetails/:id" component={MovieDetails} /> */}
        <Route exact path="/addMovie" component={AddMovie} />
      </Router>
    </div>
  );
}


export default App;
