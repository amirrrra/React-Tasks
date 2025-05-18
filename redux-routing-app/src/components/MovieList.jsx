import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "./MovieItem"
import { fetchMovies } from "../redux/movieSlice";

const MovieList = () => {
     const dispatch = useDispatch()
    const { movies, loading, error } = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div className="row g-3">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {movies.map((movie) => {
                return <MovieItem key={movie.id} movie={movie} />
            })}
        </div>
    )
}

export default MovieList