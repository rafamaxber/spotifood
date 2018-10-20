import React from 'react'

import { Main, Limit } from '../../components/Layout'
import { Header } from '../../components/Header'
import { BigInputTheme } from '../../components/Form'
import FeaturedPlaylist from '../../containers/Filters/FeaturedPlaylist'

export default class Index extends React.Component {

  render() {
    return (
      <Main>
        <Header />
        <Limit>
          <BigInputTheme
            searchBig
            type="search"
            placeholder="Find a favorite playlist..."
            autoFocus
          />
        </Limit>
        <hr />
        <Limit>
          <FeaturedPlaylist />
        </Limit>
      </Main>
    )
  }
}
