import {Box, Fade, IconButton} from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import {useBreakpoints, useCarousel} from '../hooks'

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
  const {active, prev, next} = useCarousel(elements.length, interval)

  const {isGreaterThanTablet} = useBreakpoints()
  return (
    <Box width="100%" position="relative" overflow="hidden">
      {commands && (
        <>
          <Box
            position="absolute"
            zIndex={999}
            borderRadius="50%"
            borderColor="black"
            border={1}
            top="50%"
            left={10}
          >
            <IconButton onClick={prev} size="small">
              <ChevronLeftIcon
                fontSize={isGreaterThanTablet ? 'large' : 'small'}
              />
            </IconButton>
          </Box>
          <Box
            position="absolute"
            zIndex={999}
            borderRadius="50%"
            borderColor="black"
            border={1}
            top="50%"
            right={10}
          >
            <IconButton onClick={next} size="small">
              <ChevronRightIcon
                fontSize={isGreaterThanTablet ? 'large' : 'small'}
              />
            </IconButton>
          </Box>
        </>
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
