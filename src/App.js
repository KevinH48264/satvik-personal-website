/* eslint-disable linebreak-style */
import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import theme from './theme'
import client from './client'
import HomePage from './containers/Home'
import ContactPage from './containers/Contact'
import PressPage from './containers/Press'
import VenturesPage from './containers/Ventures'
import Navbar from './components/Navbar'
import './App.css'
import { GlobalStyles } from './global-styles'

// "homepage": "https://KevinH48264.github.io/satvik-personal-website",

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        {/* <GlobalStyles> */}
        <div className="App">
          <Navbar />
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={500}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route path="/ventures" component={VenturesPage} />
                  <Route path="/press" component={PressPage} />
                  <Route path="/" component={HomePage} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
          />
        </div>
        {/* </GlobalStyles> */}
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
