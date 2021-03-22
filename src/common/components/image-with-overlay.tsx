import {Box, withStyles} from '@material-ui/core'
import {GatsbyImage} from 'gatsby-plugin-image'
import {ImageProps} from '../../home/types'

interface ImageWithOverlayProps {
  image: ImageProps
  text: JSX.Element
}

const Overlay = withStyles({
  root: {
    background: 'rgba(37,35,45,.5)',
  },
})(Box)

const ImageWithOverlay = ({
  image: {src, alt},
  text: Text,
}: ImageWithOverlayProps): JSX.Element => {
  return (
    <Box position="relative">
      <GatsbyImage image={src.childImageSharp.gatsbyImageData} alt={alt} />
      <Overlay position="absolute" left={0} bottom={0}>
        {Text}
      </Overlay>
    </Box>
  )
}

export default ImageWithOverlay
