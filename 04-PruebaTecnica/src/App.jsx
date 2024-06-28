import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts.js'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=20&type=square`
export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=20&type=square`
    setImageUrl(CAT_ENDPOINT_IMAGE_URL)
  }, [fact])

  const handleclick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de Gatos</h1>
      <button onClick={handleclick}>Get New Fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`image extracted using the first three words for ${fact}`} />}
      </section>
    </main>
  )
}
