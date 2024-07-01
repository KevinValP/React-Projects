import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleclick = async () => {
    refreshRandomFact()
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
