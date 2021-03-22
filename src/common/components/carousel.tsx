import {Box, Fade, IconButton} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import {useState} from 'react'
import {useTimeout} from '../hooks'

interface CarouselProps {
  commands?: boolean
  interval: number
  duration?: number
  elements: Array<JSX.Element>
}

const Carousel = ({
  elements,
  commands = false,
  interval = 1000,
  duration = 500,
}: CarouselProps): JSX.Element => {
  const [active, setActive] = useState(0)
  const next = () => setActive(active === elements.length - 1 ? 0 : active + 1)
  const prev = () => setActive(active === 0 ? elements.length - 1 : active - 1)

  useTimeout(next, interval, active)

  return (
    <Box width="100%" position="relative" overflow="hidden">
      {commands && (
        <Box
          position="absolute"
          zIndex={999}
          top={0}
          left={0}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
        >
          <IconButton onClick={prev}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={next}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      )}
      {elements.map((component, i) => (
        <Fade
          in={i === active}
          key={i}
          mountOnEnter={true}
          unmountOnExit={true}
          timeout={duration}
        >
          <Box
            position={i === active ? 'relative' : 'absolute'}
            data-testid={`carousel-${i}`}
          >
            {component}
          </Box>
        </Fade>
      ))}
    </Box>
  )
}

export default Carousel
