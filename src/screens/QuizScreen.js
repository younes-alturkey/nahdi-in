import React, { useEffect, useState } from 'react'
import Quiz from '../components/Quiz'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Loading from '../components/Loading'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#4096A6',
    borderRadius: theme.spacing(2),
  },
}))

const QuizScreen = () => {
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
            <Quiz />
          </Paper>
        </Container>
      )}
    </>
  )
}

export default QuizScreen
