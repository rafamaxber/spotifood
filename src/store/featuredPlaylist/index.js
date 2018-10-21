import { httpGetFeaturedPlaylistFilters } from '../../services/Resources'
import { removeTheCountryLanguageReference } from '../../utils/country'
import { getDefaultFilterValues } from '../../utils'
import { translateLocaleList } from '../../utils/locale'

const defaultFilterValues = getDefaultFilterValues()
export const initialState = {
  loading: true,
  hasFilterFields: false,
  filters: {
    country: defaultFilterValues.country,
    locale: defaultFilterValues.locale,
    timestamp: defaultFilterValues.timestamp,
    limit: defaultFilterValues.limit,
    offset: defaultFilterValues.offset,
    searchText: ''
  },
  filterFields: {
    countries: [],
    localeList: [],
    timestamp: [],
    limit: [],
    offset: []
  }
}

// types
export const types = {
  HAS_FILTER_FIELDS: 'HAS_FILTER_FIELDS',
  FILTER_FIELDS: 'FILTER_FIELDS',
  UPDATE_COUNTRY: 'UPDATE_COUNTRY',
  UPDATE_LOCALE: 'UPDATE_LOCALE',
  UPDATE_TIMESTAMP: 'UPDATE_TIMESTAMP',
  UPDATE_LIMIT: 'UPDATE_LIMIT',
  UPDATE_OFFSET: 'UPDATE_OFFSET',
  LOADING: 'LOADING'
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: action.loading
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
export const getCountries = filters => {
  let result = filters.filter(item => item.id === 'country')
  result = result.length ? result[0].values : []

  // FIX resource value en_US to US like a pattern follow by the navigators and API'S
  return result.map(item => {
    item.value = removeTheCountryLanguageReference(item.value)
    return item
  })
}

export const getlocaleList = filters => {
  let result = filters.filter(item => item.id === 'locale')
  result = result.length ? result[0].values : []
  return translateLocaleList(result)
}

export const getLimit = filters => {
  let result = filters.filter(item => item.id === 'limit')
  result = result.length ? result[0].validation : []
  return result
}

export const updateCountry = country => {
  return (dispatch, getState) => {
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

export const updateLocale = locale => {
  return (dispatch, getState) => {
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

export const uptateTimestamp = timestamp => {
  return (dispatch, getState) => {
    const filters = getState().featuredPlaylist.filters
    dispatch({
      type: types.UPDATE_TIMESTAMP,
      filters: {
        ...filters,
        timestamp
      }
    })
  }
}

export const uptateOffset = offset => {
  return (dispatch, getState) => {
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

export const uptatelimit = limit => {
  return (dispatch, getState) => {
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

export const getFeaturedPlaylistFilters = () => {
  return (dispatch, getState) => {
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
