import React from 'react'
import { Header } from '../../components/Header'
import { Main } from '../../components/Layout'
import { LoginArea } from '../../components/Login'
import qs from 'qs'
import {
  LOGIN_POP_UP_NAME,
  ACCESS_TOKEN_STORAGE_KEY,
  ACCESS_TOKEN_HASH_KEY
} from '../../constants'
import { openWindow } from '../../utils'
import { SPOTIFY_URL_AUTH } from '../../services/Spotify'

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props)
    this.popUpWidth = 600
    this.popUpHeight = 600
  }

  componentWillMount() {

    if (window.location.hash) {

      const queryParams = qs.parse(window.location.hash)
      const accessToken = queryParams[ACCESS_TOKEN_HASH_KEY]

      if (accessToken) {
        window.localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken)
      }

    }

    if (window.opener) {
      window.opener.location.href = window.location.origin
      window.close()
    }
  }

  handleLogin(event) {
    openWindow({
      url: SPOTIFY_URL_AUTH,
      name: LOGIN_POP_UP_NAME,
      width: this.popUpWidth,
      height: this.popUpHeight
    })
  }

  render() {
    return (
      <Main>
        <Header loadProgress={0} />
        <LoginArea handleLogin={event => this.handleLogin(event)} />
      </Main>
    )
  }
}
