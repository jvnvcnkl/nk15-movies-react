import logo from './logo.svg';
import './App.css';
import AppMovies from './pages/AppMovies'
import {
  BrowserRouter as Router,
  Link, Switch, Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Link to='/movies'> Movies </Link>


        <Route exact path="/movies">
          <AppMovies />
        </Route>

      </Router>
    </Provider>
  );
}

export default App;
