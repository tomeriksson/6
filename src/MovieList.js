import { useEffect, useState } from 'react';
import Movie from './Movie';

export default function MovieList({movieList, deleteMovie}) {
    const addMovies = (movies) => {
        const movieList = []
        movies.forEach((movie, i) => {
            movieList.push(<Movie title={movie.title} key={i} deleteMovie={() => deleteMovie(i)} rating={movie.rating} />)
        });
        return movieList;
    }
    return (
        <div className="movie-list">
            {addMovies(movieList)}      
        </div>
    )
}
