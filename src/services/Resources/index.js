import { httpGet } from '../RestClient'

export const urlPlaylistsFilters = 'https://www.mocky.io/v2/5a25fade2e0000213aa90776'

export const httpGetFeaturedPlaylistFilters = () => httpGet(urlPlaylistsFilters)
