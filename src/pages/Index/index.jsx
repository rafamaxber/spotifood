import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import worker from '../../app.worker.js'
import WebWorker from '../../WebWorker.js'

import { LoadableWrapper, Loading } from '../../components/Loading'
import { toogleShowFilterBar, toogleShowSearchBar } from '../../store/layout'
import { getFeaturedPlaylists } from '../../store/featuredPlaylist'
import { Main, Limit, FlexMain } from '../../components/Layout'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'

const FilterFeaturedPlaylist = LoadableWrapper({
  loader: () =>
    import(/*webpackChunkName: "FilterFeaturedPlaylist"*/ '../../containers/Filters/FeaturedPlaylist')
})

const SearchBarFeaturedPlaylist = LoadableWrapper({
  loader: () =>
    import(/*webpackChunkName: "SearchBarFeaturedPlaylist"*/ '../../containers/Filters/SearchBarFeaturedPlaylist.jsx')
})

export class Index extends React.Component {
  componentDidMount() {
    this.worker = new WebWorker(worker)
    this.worker.addEventListener('message', event => {
      this.props.getFeaturedPlaylists(false)
    })
    this.worker.postMessage('updateFeaturedPlaylist')
    this.props.getFeaturedPlaylists()
  }

  filterPlaylist(playlist) {
    if (this.props.searchBarValue.trim() === '') return playlist

    const filteredPlaylist = playlist.filter(item =>
      item.name.toLowerCase().includes(this.props.searchBarValue.toLowerCase())
    )

    return filteredPlaylist
  }

  render() {
    const {
      showSearchBar,
      showFilterBar,
      toogleShowSearchBar,
      toogleShowFilterBar
    } = this.props

    return (
      <Main>
        <Header
          toogleFilter={() => toogleShowFilterBar(!showFilterBar)}
          toogleSearchBar={() => toogleShowSearchBar(!showSearchBar)}
          loadProgress={100}
        />
        {showFilterBar && (
          <Limit>
            <FilterFeaturedPlaylist />
          </Limit>
        )}
        {showSearchBar && (
          <Limit>
            <SearchBarFeaturedPlaylist />
          </Limit>
        )}
        {this.props.playlistLoading ? (
          <Loading />
        ) : (
          <Limit>
            <FlexMain>
              {this.filterPlaylist(this.props.playlists).map(playlist => (
                <Card
                  key={playlist.id}
                  image={playlist.images[0].url}
                  title={playlist.name}
                  link={{ href: playlist.href, name: 'go to spotify' }}
                >
                  Has {playlist.tracks.total} tracks
                </Card>
              ))}
            </FlexMain>
          </Limit>
        )}
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.featuredPlaylist.playlists,
  playlistLoading: state.featuredPlaylist.playlistLoading,
  showSearchBar: state.layout.showSearchBar,
  showFilterBar: state.layout.showFilterBar,
  searchBarValue: state.featuredPlaylist.filters.searchBarValue
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toogleShowSearchBar,
      toogleShowFilterBar,
      getFeaturedPlaylists
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
