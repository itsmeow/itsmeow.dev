import { useState, useEffect, useRef } from "react"

export default function useTrollCount() {
  const lastPromise = useRef()
  const [result, setResult] = useState({})
  useEffect(() => {
    setResult(null)
    const fetchEstimate = fetch(
      "https://cors.itsmeow.dev/high-runway-274721.appspot.com/query?id=ahRkfmhpZ2gtcnVud2F5LTI3NDcyMXIVCxIIQXBpUXVlcnkYgICA6NeHgQoM"
    ).then(async res => {
      if (res && res.ok) {
        return await res.json()
      }
    })
    lastPromise.current = fetchEstimate

    fetchEstimate.then(
      res => {
        if (fetchEstimate === lastPromise.current) {
          setResult(res)
        }
      },

      e => {
        if (fetchEstimate === lastPromise.current) {
          console.warn("fetch failure", e)
        }
      }
    )
  }, [setResult])

  return { result }
}
