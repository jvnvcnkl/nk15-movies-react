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
// director: "Mrs. Fabiola Frami Sr."

// duration: 222

// genre: "sci-fi"

// id: 9

// image_url: "https://images-na.ssl-images-amazon.com/images/I/51wILNNX2VL._AC_SY445_.jpg"

// release_date: "1985-05-26"

// title: "enim quia iste harum quam"