import { httpGetFeaturedPlaylistFilters } from '../../services/Resources'
import {
  removeTheCountryLanguageReference,
  getDefaultFilterValues
} from '../../utils/country'

const defaultFilterValues = getDefaultFilterValues()
export const initialState = {
  loading: true,
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
  FILTER_FIELDS: 'FILTER_FIELDS',
  SELECT_COUNTRY: 'SELECT_COUNTRY',
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
        filterFields: {
          countries: action.filterFields.countries,
          localeList: action.filterFields.localeList,
          timestamp: action.filterFields.timestamp,
          limit: action.filterFields.limit,
          offset: action.filterFields.offset
        }
      }

    case types.SELECT_COUNTRY:
      return {
        ...state,
        filters: {
          country: action.filters.country
        }
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

export const selectCountry = country => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SELECT_COUNTRY,
      filters: {
        country
      }
    })
  }
}

export const getlocaleList = filters => {
  let result = filters.filter(item => item.id === 'locale')
  result = result.length ? result[0].values : []
  return result
}

export const getFeaturedPlaylistFilters = () => {
  return (dispatch, getState) => {
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
            limit: [],
            offset: []
          }
        })
      })
      .then(() => {
        dispatch({
          type: types.LOADING,
          loading: false
        })
      })
  }
}
