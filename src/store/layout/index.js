const initialState = {
  showFilterBar: false,
  showSearchBar: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHOW_FILTER_BAR':
      return {
        ...state,
        showFilterBar: action.showFilterBar
      }
    case 'SHOW_SEARCH_BAR':
      return {
        ...state,
        showSearchBar: action.showSearchBar
      }
    default:
      return state
  }
}

export const toogleShowFilterBar = value => {
  return dispatch => {
    dispatch({
      type: 'SHOW_FILTER_BAR',
      showFilterBar: value
    })
  }
}

export const toogleShowSearchBar = value => {
  return dispatch => {
    dispatch({
      type: 'SHOW_SEARCH_BAR',
      showSearchBar: value
    })
  }
}
