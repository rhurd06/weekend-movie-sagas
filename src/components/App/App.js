import {HashRouter as Router, Route, Link} from 'react-router-dom';

import './App.css';
import MovieList from '../MovieList/MovieList';
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
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
        <Route exact path="/addMovie" component={AddMovie} />
      </Router>
    </div>
  );
}


export default App;
