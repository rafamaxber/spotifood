import React from 'react'
import GlobalStyle from './assets/styles/resetCss'
import MainPage from './pages/Index'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <Router>
      <Route path="/" exact component={MainPage} />
    </Router>
  </React.Fragment>
)
