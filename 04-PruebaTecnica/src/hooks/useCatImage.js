import { useEffect, useState } from 'react'
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ').slice(0, 3).join(' ')
    const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWords}?fontSize=20&type=square`
    setImageUrl(CAT_ENDPOINT_IMAGE_URL)
  }, [fact])
  return { imageUrl }
}
