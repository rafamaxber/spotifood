import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { BigInputTheme } from '../../components/Form'
import * as storeActions from '../../store/featuredPlaylist'

class FeaturedPlaylist extends React.PureComponent {
  constructor(props) {
    super(props)
    const { dispatch } = props
    this.boundActionCreators = bindActionCreators(storeActions, dispatch)
  }

  handleOnChangeSearchBar(event) {
    this.props.dispatch(storeActions.updateSearchBar(event.target.value))
  }

  render() {
    const { searchBarValue } = this.props

    return (
      <BigInputTheme
        type="search"
        autoFocus
        onChange={event => this.handleOnChangeSearchBar(event)}
        value={searchBarValue}
        placeholder="Find your favorite playlist"
      />
    )
  }
}

const mapStateToProps = state => ({
  loading: state.featuredPlaylist.loading,
  searchBarValue: state.featuredPlaylist.filters.searchBarValue
})

export default connect(mapStateToProps)(FeaturedPlaylist)
