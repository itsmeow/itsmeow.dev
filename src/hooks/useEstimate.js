import { useState, useEffect } from "react"

export default function useEstimate(slug, onError = () => {}) {
  const [estimate, setEstimate] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [note, setNote] = useState()
  useEffect(() => {
    const fetchEstimate = async () => {
      setLoading(true)
      setError(null)

      let res
      try {
        res = await fetch(`https://curseestimator.itsmeow.dev/estimate/${slug}`)
      } catch (error) {
        setError(error.message)
      }

      if (res && res.ok) {
        const json = await res.json()
        if (json.status === "failed") {
          onError(json)
          setError(true)
          setNote(json.note)
        } else {
          setError(false)
          setEstimate(json)
        }
      }

      setLoading(false)
    }

    if (slug) {
      fetchEstimate()
    }
  }, [slug]) // eslint-disable-line react-hooks/exhaustive-deps

  return { loading, error, note, estimate }
}
