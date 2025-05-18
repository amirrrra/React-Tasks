function MovieItem({ movie }) {
    return (
        <div className="card col-3">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div className="card-body">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
            </div>
            <div className="card-footer justify-end">
                <p>{movie.release_date}</p>
                <p>{movie.vote_average }⭐</p>
            </div>
        </div>
    )
}

export default MovieItem