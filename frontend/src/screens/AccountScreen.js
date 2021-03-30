import React from 'react'
import { useStoreState } from 'easy-peasy'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '2rem',
    marginBottom: '5rem',
  },
}))

const AccountScreen = () => {
  const classes = useStyles()
  const user = useStoreState((state) => state.userData)

  return (
    <Container className={classes.root}>
      <h1>Hello</h1>
    </Container>
  )
}

export default AccountScreen
