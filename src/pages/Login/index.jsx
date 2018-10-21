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

export const SPOTIFY_URL_AUTH =
  'https://accounts.spotify.com/authorize?client_id=9692b64b8fda41f29d9595800af7d109&response_type=token&redirect_uri=http://localhost:3000/login'

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props)
    this.popUpWidth = 600
    this.popUpHeight = 600
  }

  componentWillMount() {
    if (window.name !== LOGIN_POP_UP_NAME || !window.location.hash) return false

    const queryParams = qs.parse(window.location.hash)
    const accessToken = queryParams[ACCESS_TOKEN_HASH_KEY]

    if (accessToken) {
      window.localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, accessToken)
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
