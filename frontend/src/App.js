import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import AppMenu from './components/AppMenu'
import ParticlesComp from './components/ParticlesComp'
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'
import TeamScreen from './screens/TeamScreen'
import PresentationScreen from './screens/PresentationScreen'
import AccountScreen from './screens/AccountScreen'

const App = () => {
  const [validSignIn, setValidSignIn] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
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
      <ParticlesComp />
      <ThemeProvider theme={darkTheme}>
        {validSignIn ? (
          <>
            <ParticlesComp />
            <AppMenu
              SignInHandler={SignInHandler}
              toggleDarkMode={toggleDarkMode}
            />
            <main>
              <Route path="/team" component={TeamScreen} />
              <Route path="/account" component={AccountScreen} />
              <Route path="/welcome" component={PresentationScreen} />
              <Route path="/" component={DashboardScreen} exact />
            </main>
          </>
        ) : (
          <>
            <div className="nahdi-background">
              <LoginScreen SignInHandler={SignInHandler} />
            </div>
          </>
        )}
      </ThemeProvider>
    </Router>
  )
}

export default App
