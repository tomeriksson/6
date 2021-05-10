import { useState } from 'react';
import './App.css';
import MovieList from './MovieList';

function App() {
  const [title, setTitle] = useState("")
  const [betyg, setRating] = useState(0)
  const [movieList, setMoviesList] = useState([])

  const deleteMovie = (title, rating) => {

    const newMovieList = movieList.filter(movie => movie.title !== title && movie.rating !== rating)
    setMoviesList(newMovieList)
  }

  const handleSubmit = e => {
    e.preventDefault()
    let title = e.target[0].value;
    let rating = e.target[1].value;
    if (title.length === 0 || rating === "0"){
      alert("fyll i titel och rating")
    }else {
      setMoviesList([{title, rating}, ...movieList])
      setRating("0")
      setTitle("")
    }

  }
  const handleInputChange = e => {
    setTitle(e.target.value)
  }

  const handleSelectChange = e => {
    setRating(e.target.value)

  }

  return (
    <div className="App">
      <h1>Min filmlista</h1>
      <h2>Lägg till en film</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Titel:
          <input type="text" value={title} onChange={handleInputChange} />
        </label>
        <label>
          Rating:
          <select value={betyg} onChange={handleSelectChange}>
            <option value="0">Välj en rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>

          </select>
        </label>
        <input type="submit" value="Spara film" />
      </form>
      <MovieList movieList={movieList} deleteMovie={deleteMovie} />
    </div>
  );
}

export default App;
