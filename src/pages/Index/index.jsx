import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LoadableWrapper } from '../../components/Loading'
import { toogleShowFilterBar, toogleShowSearchBar } from '../../Store/Layout'
import { Main, Limit, FlexMain } from '../../components/Layout'
import { Header } from '../../components/Header'
import { CardFeaturedPlaylist } from '../../components/Card'
import { BigInputTheme } from '../../components/Form'

import mock from '../../utils/mock-featured-playlists.json'

const FilterFeaturedPlaylist = LoadableWrapper({
  loader: () =>
    import(/*webpackChunkName: "FilterFeaturedPlaylist"*/ '../../containers/Filters/FeaturedPlaylist')
})

const playlists = mock.playlists.items

export class Index extends React.Component {
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
          loadTime={100}
        />
        {showFilterBar && (
          <Limit>
            <FilterFeaturedPlaylist />
          </Limit>
        )}
        {showSearchBar && (
          <Limit>
            <BigInputTheme
              type="search"
              placeholder="Find your favorite playlist"
            />
          </Limit>
        )}
        <Limit>
          <FlexMain>
            {playlists.map(playlist => (
              <CardFeaturedPlaylist
                key={playlist.id}
                image={playlist.images[0].url}
                title={playlist.name}
                subTitle={playlist.name}
                tracks={{
                  total: playlist.tracks.total,
                  href: playlist.tracks.href
                }}
                link={{ href: playlist.href, name: 'go to spotify' }}
              />
            ))}
          </FlexMain>
        </Limit>
      </Main>
    )
  }
}

const mapStateToProps = state => ({
  showSearchBar: state.layout.showSearchBar,
  showFilterBar: state.layout.showFilterBar
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toogleShowSearchBar,
      toogleShowFilterBar
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
