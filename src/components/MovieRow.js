import { useParams } from "react-router"


export default function MovieRow({ prop }) {
    const movie = prop;

    return (
        <div>
            <h2>{movie.title}</h2>
            <p>Directed by {movie.director}</p>
            <p>Genre: {movie.genre}</p>
            <p>Duration: {movie.duration}</p>
            <p>Release date: {movie.release_date}</p>
            <img src={movie.image_url} />

        </div >
    )
}
