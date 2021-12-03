import React, { useEffect, useState } from "react"
import {
    useDispatch, useSelector
} from 'react-redux';

import { selectMovies } from "../store/movies/selectors";
import { getMovies } from "../store/movies/slice";
import MovieRow from '../components/MovieRow'
export default function AppMovies() {

    const dispatch = useDispatch();

    const movies = useSelector(selectMovies);
    const [selectedMovies, setSelectedMovies] = useState([
    ])


    useEffect(() => {
        dispatch(getMovies());
    }, []);

    const selectedMoviesCallback = (selected, movieId) => {

        const index = selectedMovies.findIndex(object => object.id === movieId)
        console.log(index)
        if (index) {
            const movieUpdate = { id: movieId, selected: selected }
            console.log(movieUpdate)
            setSelectedMovies([
                ...selectedMovies.splice(index, 1),
                movieUpdate
            ])
        }

        else {

            setSelectedMovies([
                ...selectedMovies,
                {
                    id: movieId,
                    selected: selected,
                }
            ])
        }
    }

    useEffect(() => {
        console.log(selectedMovies)
    }, [selectedMovies])



    return (
        <div>
            <h1>Movies</h1>
            Number of selected movies :{selectedMovies.length}
            <ul>
                {movies.data.length ? movies.data.map(movie => (
                    <li key={movie.id}><MovieRow prop={movie} callback={selectedMoviesCallback} /> </li>

                )) : <p>No movies to show </p>}
            </ul>
        </div >
    )
}