// @flow

import { httpGetFeaturedPlaylistFilters } from '../../services/Resources'
import { removeTheCountryLanguageReference } from '../../utils/country'
import {
  getDefaultFilterValues,
  deleteProp,
  errorAccessToken
} from '../../utils'
import { translateLocaleList } from '../../utils/locale'
import { httpGetFeaturedPlaylists } from '../../services/Spotify'

const defaultFilterValues: Object = getDefaultFilterValues()
export const initialState: Object = {
  loading: true,
  playlistLoading: true,
  hasFilterFields: false,
  filters: {
    country: defaultFilterValues.country,
    locale: defaultFilterValues.locale,
    timestamp: defaultFilterValues.timestamp,
    limit: defaultFilterValues.limit,
    offset: defaultFilterValues.offset,
    searchBarValue: ''
  },
  filterFields: {
    countries: [],
    localeList: [],
    timestamp: [],
    limit: [],
    offset: []
  },
  playlists: [],
  errorPlaylists: {}
}

// types
export const types: Object = {
  HAS_FILTER_FIELDS: 'HAS_FILTER_FIELDS',
  FILTER_FIELDS: 'FILTER_FIELDS',
  UPDATE_COUNTRY: 'UPDATE_COUNTRY',
  UPDATE_LOCALE: 'UPDATE_LOCALE',
  UPDATE_TIMESTAMP: 'UPDATE_TIMESTAMP',
  UPDATE_LIMIT: 'UPDATE_LIMIT',
  UPDATE_OFFSET: 'UPDATE_OFFSET',
  UPDATE_SEARCH_BAR_VALUE: 'UPDATE_SEARCH_BAR_VALUE',
  PLAYLISTS: 'PLAYLISTS',
  LOADING_PLAYLISTS: 'LOADING_PLAYLISTS',
  ERROR_LOADING_PLAYLISTS: 'ERROR_LOADING_PLAYLISTS',
  LOADING: 'LOADING'
}

// reducer
export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: action.loading
      }

    case types.PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists
      }

    case types.LOADING_PLAYLISTS:
      return {
        ...state,
        playlistLoading: action.playlistLoading
      }

    case types.ERROR_LOADING_PLAYLISTS:
      return {
        ...state,
        errorPlaylists: {
          message: action.message,
          status: action.status
        }
      }

    case types.FILTER_FIELDS:
      return {
        ...state,
        filterFields: action.filterFields
      }

    case types.HAS_FILTER_FIELDS:
      return {
        ...state,
        hasFilterFields: action.hasFilterFields
      }

    case types.UPDATE_SEARCH_BAR_VALUE:
    case types.UPDATE_COUNTRY:
    case types.UPDATE_LOCALE:
    case types.UPDATE_TIMESTAMP:
    case types.UPDATE_LIMIT:
    case types.UPDATE_OFFSET:
      return {
        ...state,
        filters: action.filters
      }

    default:
      return state
  }
}

// actions
export const getCountries = (filters: Array<Object>): Array<Object> => {
  let result = filters.filter(item => item.id === 'country')
  result = result.length ? result[0].values : []

  // FIX: resource value en_US to US like a pattern follow by the navigators and API'S
  return result.map(item => {
    item.value = removeTheCountryLanguageReference(item.value)
    return item
  })
}

export const getlocaleList = (filters: Array<Object>): Array<Object> => {
  let result = filters.filter(item => item.id === 'locale')
  result = result.length ? result[0].values : []
  return translateLocaleList(result)
}

export const getLimit = (filters: Array<Object>): Array<Object> => {
  let result = filters.filter(item => item.id === 'limit')
  result = result.length ? result[0].validation : []
  return result
}

export const updateCountry = (country: string) => {
  return (dispatch: Function, getState: Function) => {
    const filters = getState().featuredPlaylist.filters
    dispatch({
      type: types.UPDATE_COUNTRY,
      filters: {
        ...filters,
        country
      }
    })
  }
}

export const updateLocale = (locale: Object) => {
  return (dispatch: Function, getState: Function) => {
    const filters = getState().featuredPlaylist.filters
    dispatch({
      type: types.UPDATE_LOCALE,
      filters: {
        ...filters,
        locale
      }
    })
  }
}

export const uptateTimestamp = (timestamp: Object) => {
  return (dispatch: Function, getState: Function) => {
    const filters = getState().featuredPlaylist.filters
    const timestampFormated = timestamp.toISOString()
    dispatch({
      type: types.UPDATE_TIMESTAMP,
      filters: {
        ...filters,
        timestamp: timestampFormated
      }
    })
  }
}

export const uptateOffset = (offset: number) => {
  return (dispatch: Function, getState: Function) => {
    const filters = getState().featuredPlaylist.filters
    dispatch({
      type: types.UPDATE_OFFSET,
      filters: {
        ...filters,
        offset
      }
    })
  }
}

export const uptatelimit = (limit: number) => {
  return (dispatch: Function, getState: Function) => {
    const filters = getState().featuredPlaylist.filters
    dispatch({
      type: types.UPDATE_LIMIT,
      filters: {
        ...filters,
        limit
      }
    })
  }
}

export const updateSearchBar = (value: string) => {
  return (dispatch: Function, getState: Function) => {
    const filters = getState().featuredPlaylist.filters
    dispatch({
      type: types.UPDATE_SEARCH_BAR_VALUE,
      filters: {
        ...filters,
        searchBarValue: value
      }
    })
  }
}

export const getFeaturedPlaylistFilters = () => {
  return (dispatch: Function, getState: Function) => {
    const filters = getState().featuredPlaylist.filters

    dispatch({
      type: types.LOADING,
      loading: true
    })

    return httpGetFeaturedPlaylistFilters()
      .then(filters => {
        dispatch({
          type: types.FILTER_FIELDS,
          filterFields: {
            countries: getCountries(filters.data.filters),
            localeList: getlocaleList(filters.data.filters),
            timestamp: [],
            limit: getLimit(filters.data.filters),
            offset: []
          }
        })
      })
      .then(() => {
        dispatch({
          type: types.UPDATE_LIMIT,
          filters: {
            ...filters,
            limit: defaultFilterValues.limit
          }
        })
      })
      .then(() => {
        dispatch({
          type: types.LOADING,
          loading: false
        })
        dispatch({
          type: types.HAS_FILTER_FIELDS,
          hasFilterFields: true
        })
      })
  }
}

export const getFeaturedPlaylists = (hasLoading: boolean = true) => {
  return (dispatch: Function, getState: Function) => {
    const filters = getState().featuredPlaylist.filters
    const spotifyFilter = deleteProp('searchBarValue', filters)

    dispatch({
      type: types.LOADING_PLAYLISTS,
      playlistLoading: hasLoading
    })

    return httpGetFeaturedPlaylists(spotifyFilter)
      .then(response => {
        dispatch({
          type: types.PLAYLISTS,
          playlists: response.data.playlists.items
        })
      })
      .then(() => {
        dispatch({
          type: types.ERROR_LOADING_PLAYLISTS,
          message: '',
          status: ''
        })
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status === 401) {
            return errorAccessToken()
          }
          if (error.response.status === 400) {
            const { data } = error.response
            return dispatch({
              type: types.ERROR_LOADING_PLAYLISTS,
              message: data.error.message || 'Not found',
              status: 'error'
            })
          }
        }
      })
      .then(() => {
        dispatch({
          type: types.LOADING_PLAYLISTS,
          playlistLoading: false
        })
      })
  }
}
