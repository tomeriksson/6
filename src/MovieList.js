import Movie from './Movie';

export default function MovieList({movieList, deleteMovie}) {
    const addMovies = (movies) => {
        const movieList = []
        movies.forEach((movie, i) => {
            movieList.push(<Movie title={movie.title} key={i} deleteMovie={deleteMovie} rating={movie.rating} />)
        });
        return movieList;
    }
    return (
        <div>
            {addMovies(movieList)}
        </div>
    )
}
