import { useParams } from "react-router"
import { useState } from "react";
import { useEffect } from "react";

export default function MovieRow({ prop, callback }) {
    const movie = prop;

    const [selected, setSelected] = useState(false);


    const handleClick = (e) => {
        e.preventDefault();
        const newSelected = !selected;
        if (selected) { setSelected(false) }
        else { setSelected(true) }
        callback(newSelected, movie.id)
    }
    return (
        <div
            style={selected ? { marginBottom: '5px', border: '5px solid black' } : {}} >
            <h2>{movie.title}</h2>
            <p>Directed by {movie.director}</p>
            <p>Genre: {movie.genre}</p>
            <p>Duration: {movie.duration}</p>
            <p>Release date: {movie.release_date}</p>
            <img src={movie.image_url} />
            <button onClick={(e) => handleClick(e)}>Select this movie</button>
            <break></break>
        </div >
    )
}
