import {useEffect} from 'react'

type useTimeoutProps = (
  onTimeout: () => void,
  duration: number,
  query: number,
) => void

const useTimeout: useTimeoutProps = (onTimeout, duration, query) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onTimeout()
    }, duration)

    return () => clearTimeout(timeout)
  }, [query])
}

export default useTimeout
