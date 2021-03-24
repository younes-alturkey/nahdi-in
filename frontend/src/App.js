import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import DashboardScreen from './screens/DashboardScreen'
import AppMenu from './components/AppMenu'
import WelPresentation from './components/WelPresentation'
import Footer from './components/Footer'

/*
 *
 * CUSTOM THEMEING MUI
 *
 */

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1B5D6B',
    },
    secondary: {
      main: '#E7662E',
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

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppMenu />
        <main>
          <Route path="/welcome" component={WelPresentation} exact />
          <Route path="/" component={DashboardScreen} exact />
        </main>
        <Footer />
      </ThemeProvider>
    </Router>
  )
}

export default App
