import './App.css'
import { Movies } from './components/renderMovies'
import { useMovies } from './hooks/useMovies.js'
function App () {
  const { movies: mappedMovies } = useMovies()
  return (

    <div className='page'>
      <header>
        <form className='form'>
          <input placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>

  )
}

export default App
