import React from 'react'
import LogoColored from '../assets/images/logo-white.png'
import Avatar from '@material-ui/core/Avatar'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'

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
  },
  large: {
    width: theme.spacing(22),
    height: theme.spacing(14),
    padding: theme.spacing(6),
    margin: 'auto',
  },
  divider: {
    borderBottom: 'solid',
    borderWidth: '1px',
    color: '#1B5D6B',
    padding: '0.5rem',
    margin: 'auto',
    width: '1.5rem',
  },
  space: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    fontSize: '0.8rem',
  },
}))

const LoginScreen = ({ SignInHandler }) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Grid justify="flex-end" container spacing={3}>
        <Grid item xs={12} lg={6} md={6}>
          <Avatar
            src={LogoColored}
            variant="square"
            className={classes.large}
          />
          <Paper className={classes.paper} elevation={3}>
            <Typography color="secondary" variant="h5" nowrap="true">
              Login
            </Typography>
            <div className={classes.divider} />
            <Typography
              className={classes.space}
              color="secondary"
              nowrap="true"
            >
              Welcome back! Login to access Nahdi In.
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
                onClick={SignInHandler}
              >
                Login
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
    </Container>
  )
}

export default LoginScreen
