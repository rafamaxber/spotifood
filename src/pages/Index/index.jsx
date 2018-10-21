import React from 'react'

import { Main, Limit, FlexMain } from '../../components/Layout'
import { Header } from '../../components/Header'
import { BigInputTheme } from '../../components/Form'
import FilterFeaturedPlaylist from '../../containers/Filters/FeaturedPlaylist'
import { CardFeaturedPlaylist } from '../../components/Card'

import mock from '../../utils/mock-featured-playlists.json'

const playlists = mock.playlists.items

export default class Index extends React.Component {
  render() {
    return (
      <Main>
        <Header />
        <Limit>
          <FilterFeaturedPlaylist />
        </Limit>
        <Limit>
          <BigInputTheme
            type="search"
            placeholder="Find your favorite playlist"
          />
        </Limit>
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
