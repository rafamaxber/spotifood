import { httpGet } from '../RestClient'

const urlFeaturedPlayList =
  'https://developer.spotify.com/web-api/get-list-featured-playlists/'

export const getFeaturedPlayList = () => httpGet(urlFeaturedPlayList)

export const SPOTIFY_AUTHORIZE_URL =
  'https://accounts.spotify.com/authorize?client_id=9692b64b8fda41f29d9595800af7d109&response_type=token&redirect_uri=http://localhost:3000/login'

