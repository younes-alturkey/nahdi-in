import React from 'react'
import store from './store'
import { StoreProvider } from 'easy-peasy'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import AppMenu from './components/AppMenu'
import Footer from './components/Footer'
import DashboardScreen from './screens/DashboardScreen'
import PresentationScreen from './screens/PresentationScreen'
import AccountScreen from './screens/AccountScreen'

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
    <StoreProvider store={store}>
      <Router>
        <ThemeProvider theme={theme}>
          <AppMenu />
          <main>
            <Route path="/account" component={AccountScreen} />
            <Route path="/welcome" component={PresentationScreen} />
            <Route path="/" component={DashboardScreen} exact />
          </main>
          <Footer />
        </ThemeProvider>
      </Router>
    </StoreProvider>
  )
}

export default App
