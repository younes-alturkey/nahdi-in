import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import AppMenu from './components/AppMenu'
import Footer from './components/Footer'
import ParticlesComp from './components/ParticlesComp'
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'
import PresentationScreen from './screens/PresentationScreen'
import AccountScreen from './screens/AccountScreen'
import LinearProgress from '@material-ui/core/LinearProgress'

const App = () => {
  const [validSignIn, setValidSignIn] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const mainPrimaryColor = darkMode ? '#121212' : '#FFFFFF'
  const mainSecondaryColor = '#1B5D6B'
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
    typography: {
      fontFamily: [
        'VariableBlack',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  })

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const SignInHandler = () => {
    setValidSignIn(!validSignIn)
  }

  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        {validSignIn ? (
          <>
            <AppMenu
              SignInHandler={SignInHandler}
              toggleDarkMode={toggleDarkMode}
            />
            <main>
              <Route path="/account" component={AccountScreen} />
              <Route path="/welcome" component={PresentationScreen} />
              <Route path="/" component={DashboardScreen} exact />
            </main>
          </>
        ) : (
          <>
            <main>
              <LinearProgress
                value={100}
                variant="determinate"
                color="secondary"
              />
              <ParticlesComp />
              <LoginScreen SignInHandler={SignInHandler} />
            </main>
          </>
        )}
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App
