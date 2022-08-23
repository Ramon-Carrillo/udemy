import { useState, useEffect } from 'react'

export const useFetch = (url, method = 'GET') => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState(null)

  const postData = (postData) => {
    setOptions({
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    })
  }

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async (fetchOptions) => {
      setIsPending(true)
      try {
        const res = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        })
        if (!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err) {
        setIsPending(false)
        setError('Could not fetch the data')
        console.log(err.message)
      }
    }

    if (method === 'GET') {
      fetchData()
    }

    if (method === 'POST' && options) {
      fetchData(options)
    }

    return () => {
      controller.abort()
    }
  }, [url, options, method])

  return { data, isPending, error, postData }
}
