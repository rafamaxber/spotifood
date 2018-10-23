import axios from 'axios'
import { ACCESS_TOKEN_STORAGE_KEY, SPOTIFY_CLIENT_ID } from '../../constants'

const SPOTIFY_URL_API = 'https://api.spotify.com/v1/browse'
const URL_FEATURED_PLAYLIST = '/featured-playlists/'

export const getToken = () => {
  return window.localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)
}

const instance = () =>
  axios.create({
    baseURL: SPOTIFY_URL_API,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })

export const SPOTIFY_URL_AUTH = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${
  window.location.origin
}/login`

export const httpGetFeaturedPlaylists = (filters, restClient = instance) => {
  return restClient().get(URL_FEATURED_PLAYLIST, { params: filters })
}
