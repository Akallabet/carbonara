import {useState} from 'react'
import useTimeout from './use-timeout'

type useCarouselProps = (
  length: number,
  interval: number,
) => {
  active: number
  next: () => void
  prev: () => void
}

const useCarousel: useCarouselProps = (length, interval) => {
  const [active, setActive] = useState(0)
  const next = () => setActive(active === length - 1 ? 0 : active + 1)
  const prev = () => setActive(active === 0 ? length - 1 : active - 1)

  useTimeout(next, interval, active)

  return {active, next, prev}
}

export default useCarousel
