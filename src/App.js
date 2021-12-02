import logo from './logo.svg';
import './App.css';
import AppMovies from './pages/AppMovies'
import {
  BrowserRouter as Router,
  Link, Switch, Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Link to='/movies'> Movies </Link>


      <Route exact path="/movies">
        <AppMovies />
      </Route>

    </Router>
  );
}

export default App;
