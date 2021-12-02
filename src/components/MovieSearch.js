import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { getMovies } from "../store/movies/slice";



export default function MovieSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies({ title: searchTerm }))
    }, [searchTerm]);

    return (
        <div>
            <input placeholder="Search movies" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
        </div>
    )
}