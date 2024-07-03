import { useRef, useState, useEffect } from 'react'
import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies.js'

function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search.startsWith(' ')) return

    if (search === '') {
      setError('No se puede pasar un campo vacio')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede pasar un numero')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])
  return { search, setSearch, error }
}

function App () {
  const { search, setSearch, error } = useSearch()
  const { movies: mappedMovies, getMovies } = useMovies({ search })
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    setSearch(newQuery)
  }

  return (

    <div className='page'>
      <header>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>

  )
}

export default App
