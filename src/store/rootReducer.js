import { combineReducers } from 'redux'
import featuredPlaylist from './featuredPlaylist'
import layout from './layout'

export default combineReducers({
  layout,
  featuredPlaylist
})
