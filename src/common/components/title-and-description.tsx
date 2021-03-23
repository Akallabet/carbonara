import {Box, Typography} from '@material-ui/core'

interface TitleAndDescriptionProps {
  title: string
  description: string
}

const TitleAndDescription = ({
  title,
  description,
}: TitleAndDescriptionProps): JSX.Element => {
  return (
    <Box
      p={10}
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box mb={5}>
        <Typography variant="h3" color="textSecondary">
          {title}
        </Typography>
      </Box>
      <Typography variant="body1" color="textSecondary">
        {description}
      </Typography>
    </Box>
  )
}

export default TitleAndDescription
