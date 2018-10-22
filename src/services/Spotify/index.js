import axios from 'axios'
import { ACCESS_TOKEN_STORAGE_KEY } from '../../constants'
const CLIENT_ID = '9692b64b8fda41f29d9595800af7d109'
const SPOTIFY_URL_API = 'https://api.spotify.com/v1/browse'
const URL_FEATURED_PLAYLIST = '/featured-playlists/'

const getToken = () => {
  return window.localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
}

const instance = () =>
  axios.create({
    baseURL: SPOTIFY_URL_API,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })

export const SPOTIFY_URL_AUTH = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${
  window.location.origin
}/login`

export const httpGetFeaturedPlaylists = filters => {
  return instance().get(URL_FEATURED_PLAYLIST, { params: filters })
}
