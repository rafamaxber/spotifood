import { httpGet } from '../RestClient'

const urlFeaturedPlayList =
  'https://developer.spotify.com/web-api/get-list-featured-playlists/'

export const getFeaturedPlayList = () => httpGet(urlFeaturedPlayList)
