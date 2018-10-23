// @flow
const initialState = {
  showFilterBar: false,
  showSearchBar: false
}

export default (state: Object = initialState, action: Object): Object => {
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

export const toogleShowFilterBar = (value: Boolean) => {
  return (dispatch: Function) => {
    dispatch({
      type: 'SHOW_FILTER_BAR',
      showFilterBar: value
    })
  }
}

export const toogleShowSearchBar = (value: Boolean) => {
  return (dispatch: Function) => {
    dispatch({
      type: 'SHOW_SEARCH_BAR',
      showSearchBar: value
    })
  }
}
