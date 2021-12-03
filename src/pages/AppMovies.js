import React, { useEffect } from "react"
import {
    useDispatch, useSelector
} from 'react-redux';

import { selectMovies } from "../store/movies/selectors";
import { getMovies } from "../store/movies/slice";
import MovieRow from '../components/MovieRow'
export default function AppMovies() {

    const dispatch = useDispatch();


    const movies = useSelector(selectMovies)
    console.log(movies)

    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.data.length ? movies.data.map(movie => (
                    <li key={movie.id}><MovieRow prop={movie} /> </li>

                )) : <p>No movies to show </p>}
            </ul>
        </div >
    )
}