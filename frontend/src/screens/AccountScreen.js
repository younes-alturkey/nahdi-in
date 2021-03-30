import React from 'react'
import { useStoreState } from 'easy-peasy'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import userImage from '../assets/images/barrak.png'
import bgImage from '../assets/images/beats.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '2rem',
    marginBottom: '5rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    boxShadow: theme.shadows[3],
  },
}))

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge)

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar)

const AccountScreen = () => {
  const classes = useStyles()
  const user = useStoreState((state) => state.userData)

  return (
    <Container className={classes.root}>
      <Card>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={bgImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Avatar
            alt="User Image"
            src={userImage}
            variant="rounded"
            className={classes.large}
          />
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      {/* <Paper elevation={10} className={classes.paper}>
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
        >
          <Avatar alt="User Image" src={userImage} className={classes.large} />
        </StyledBadge>
      </Paper> */}
    </Container>
  )
}

export default AccountScreen
