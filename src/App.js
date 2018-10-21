import React from 'react'
import GlobalStyle from './assets/styles/resetCss'
import MainPage from './pages/Index'
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { ACCESS_TOKEN_STORAGE_KEY } from './constants'

const isAuthenticated = () => {
  const accessToken = window.localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
  return !!accessToken
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
)

export default () => (
  <Router>
    <React.Fragment>
      <GlobalStyle />
      <PrivateRoute path="/" exact component={MainPage} />
      <Route path="/login" component={Login} />
    </React.Fragment>
  </Router>
)
