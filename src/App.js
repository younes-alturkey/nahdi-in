import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import AppMenu from './components/AppMenu'
import FakeAppMenu from './components/FakeAppMenu'
import AppBackground from './components/AppBackground'
import LoginScreen from './screens/LoginScreen'
import TeamScreen from './screens/TeamScreen'
import PresentationScreen from './screens/PresentationScreen'
import SurveyScreen from './screens/SurveyScreen'
import ProfileScreen from './screens/ProfileScreen'
import QuizScreen from './screens/QuizScreen'
import SoonScreen from './screens/SoonScreen'

const App = () => {
  const [validSignIn, setValidSignIn] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const mainPrimaryColor = darkMode ? '#121212' : '#FFFFFF'
  const mainSecondaryColor = '#4096A6'
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
        'Space Mono',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontSize: 11,
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
      <AppBackground />
      <ThemeProvider theme={darkTheme}>
        {validSignIn ? (
          <>
            <AppMenu
              SignInHandler={SignInHandler}
              toggleDarkMode={toggleDarkMode}
            />
            <main>
              <Route path="/notifications" component={SoonScreen} />
              <Route path="/chat" component={SoonScreen} />
              <Route path="/learning" component={SoonScreen} />
              <Route path="/survey" component={SurveyScreen} />
              <Route path="/files" component={SoonScreen} />
              <Route path="/quiz" component={QuizScreen} />
              <Route path="/team" component={TeamScreen} />
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/welcome" component={PresentationScreen} />
              <Route path="/" component={SoonScreen} exact />
            </main>
          </>
        ) : (
          <>
            <div>
              <FakeAppMenu />
              <LoginScreen SignInHandler={SignInHandler} />
            </div>
          </>
        )}
      </ThemeProvider>
    </Router>
  )
}

export default App
