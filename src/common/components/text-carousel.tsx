import {Box, Fade} from '@material-ui/core'
import {useCarousel} from '../hooks'

interface TextCarouselProps {
  interval: number
  duration?: number
  elements: Array<string>
}

const TextCarousel = ({
  elements,
  interval = 1000,
  duration = 500,
}: TextCarouselProps): JSX.Element => {
  const {active} = useCarousel(elements.length, interval)

  return (
    <span>
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
            component="span"
          >
            {component}
          </Box>
        </Fade>
      ))}
    </span>
  )
}

export default TextCarousel
