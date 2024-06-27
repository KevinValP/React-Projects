import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=20&type=square`
export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const threeFirstWords = fact.split(' ', 3).join(' ')
        console.log(threeFirstWords)
        setImageUrl(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=20&type=square&fontColor=white`)
      })
  }, [])
  return (
    <main>
      <h1>App de Gatos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`image extracted using the first three words for ${fact}`} />}
      </section>
    </main>
  )
}
