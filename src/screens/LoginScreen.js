import React, { useState } from 'react'
import LogoColored from '../assets/images/logo-colored.png'
import Avatar from '@material-ui/core/Avatar'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootForm: {
    '& > *': {
      margin: theme.spacing(1),
      width: '75%',
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: '2.5rem',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(2),
  },
  large: {
    width: theme.spacing(23),
    height: theme.spacing(8),
    padding: theme.spacing(4),
    margin: 'auto',
  },
  divider: {
    borderBottom: 'solid',
    borderWidth: '1px',
    color: '#4096A6',
    padding: '0.5rem',
    margin: 'auto',
    width: '1.5rem',
  },
  space: {
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
    fontSize: '0.8rem',
    textAlign: 'center',
  },
  login: {
    padding: 11,
  },
}))

const LoginScreen = ({ SignInHandler }) => {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  const pseudoLogin = () => {
    setLoading(!loading)

    setTimeout(() => SignInHandler(), 1000)
  }

  return (
    <>
      <Container className={classes.root}>
        <Grid justify="center" container spacing={3}>
          <Grid item xs={12} lg={6} md={6}>
            <Avatar
              src={LogoColored}
              variant="square"
              className={classes.large}
            />
            <Paper className={classes.paper} elevation={20}>
              <Typography color="secondary" variant="h5" nowrap="true">
                Login
              </Typography>
              <div className={classes.divider} />
              <Typography
                className={classes.space}
                color="secondary"
                nowrap="true"
              >
                Hala back, Nahdawi!
              </Typography>
              <form className={classes.rootForm} noValidate autoComplete="off">
                <TextField
                  required
                  id="emailInput"
                  label="Email"
                  value="aljeaan.ba@nahdi.sa"
                  variant="filled"
                  color="secondary"
                />
                <TextField
                  required
                  id="passwordInput"
                  label="Password"
                  value="Ba@123456"
                  variant="filled"
                  color="secondary"
                  type="password"
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={pseudoLogin}
                >
                  {loading ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    <Typography className={classes.login}>Login</Typography>
                  )}
                </Button>
              </form>
              <Typography
                className={classes.space}
                color="secondary"
                nowrap="true"
              >
                <Link
                  style={{ textDecoration: 'none' }}
                  color="secondary"
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=966546960001&text=Hi%20Lamar.%20I%20need%20help%20with%20my%20Nahdi%20In%20account."
                >
                  Don't have an account? Contact HR.
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Typography color="secondary" className={classes.space}>
          Nahdi Medical Company &copy; 2021
        </Typography>
      </Container>
    </>
  )
}

export default LoginScreen
