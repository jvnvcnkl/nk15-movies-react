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


    useEffect(() => {
        dispatch(getMovies());
    }, []);

    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies && movies.data.map(movie => (
                    <li key={movie.id}><MovieRow prop={movie} /> </li>

                ))}
            </ul>
        </div >
    )
}