import { useState } from 'react';
import './App.css';
import MovieList from './MovieList';

function App() {
  const [title, setTitle] = useState("")
  const [betyg, setRating] = useState(0)
  const [movieList, setMoviesList] = useState([])

  const deleteMovie = (index) => {
    const newMovieList = movieList.filter((movie, i) => index !== i)
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

  const sortMoviesByName = () => {
    const newMovieList = [...movieList]
    newMovieList.sort((a, b) => (a.title >= b.title) ? 1 : -1)
    setMoviesList(newMovieList)
  }

  const sortMoviesByRating = () => {
    const newMovieList = [...movieList]
    newMovieList.sort((a, b) => (a.rating <= b.rating) ? 1 : -1)
    setMoviesList(newMovieList)
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
      <button onClick={sortMoviesByName}>Alfabetisk ordning</button>
      <button onClick={sortMoviesByRating}>Betygsordning</button>
      <MovieList movieList={movieList} deleteMovie={deleteMovie} />
    </div>
  );
}

export default App;
