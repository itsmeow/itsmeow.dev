import { useState, useEffect } from "react"

// This is broken at the moment. Thanks CORS proxy + bad redirect.

const useThunderDownloads = (pid) => {
  const [downloads, setDownloads] = useState(0)
  useEffect(() => {
    const fetchDownloads = async () => {
      let res = await fetch(
        `https://cors.itsmeow.dev/https://thunderstore.io/api/experimental/package/${pid}`
      )

      if (res && res.ok) {
        const text = await res.text()
        let matches = Array.from(
          text.matchAll(/<text x="[\d.]+" y="[\d.]+">([\d,]+)<\/text>/g),
          (m) => m[1]
        )
        let downloads = parseInt(matches[0].replace(/,/g, ""))
        setDownloads(downloads)
      }
    }

    if (pid) {
      fetchDownloads()
    }
  }, [pid])

  return downloads
}

export default useThunderDownloads
