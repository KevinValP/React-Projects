import { useState } from 'react'
// import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      // setResponseMovies(withResults)
      fetch(`https://www.omdbapi.com/?apikey=e9bb58f9&s=${search}`)
        .then((response) => response.json())
        .then((data) => {
          setResponseMovies(data)
        })
    } else {
      setResponseMovies(withoutResults)
    }
  }

  return { movies: mappedMovies, getMovies }
}
