import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Avatar from '@material-ui/core/Avatar'
import Loading from '../components/Loading'
import Soon from '../assets/images/soon.gif'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
    padding: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#4096A6',
    borderRadius: theme.spacing(2),
  },
  soon: {
    width: 230,
    height: 230,
  },
}))

const SoonScreen = () => {
  const classes = useStyles()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  })

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container component="main" maxWidth="md">
          <Paper elevation={20} className={classes.paper}>
            <Avatar alt="Soon Gif" src={Soon} className={classes.soon} />
          </Paper>
        </Container>
      )}
    </>
  )
}

export default SoonScreen
