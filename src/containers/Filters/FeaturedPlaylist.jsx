import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  FilterCountries,
  TitleFilter,
  WarpFilter,
  FilterLocale,
  FilterTimestamp,
  FilterOffset,
  FilterLimit
} from '../../components/Filters'

import { Loading } from '../../components/Loading/index'
import * as storeActions from '../../store/featuredPlaylist'

class FeaturedPlaylist extends React.PureComponent {
  constructor(props) {
    super(props)
    const { dispatch } = props
    this.boundActionCreators = bindActionCreators(storeActions, dispatch)
  }

  componentDidMount() {
    if (this.props.hasFilterFields) return false
    this.props.dispatch(storeActions.getFeaturedPlaylistFilters())
  }

  handleOnChangeCountry(event) {
    this.props.dispatch(storeActions.updateCountry(event.target.value))
    this.props.dispatch(storeActions.getFeaturedPlaylists())
  }

  handleOnChangeLocale(locale) {
    this.props.dispatch(storeActions.updateLocale(locale.value))
    this.props.dispatch(storeActions.getFeaturedPlaylists())
  }

  handleOnChangeTimestamp(value) {
    this.props.dispatch(storeActions.uptateTimestamp(value))
    this.props.dispatch(storeActions.getFeaturedPlaylists())
  }

  handleOnChangeLimit(value) {
    this.props.dispatch(storeActions.uptatelimit(value))
    this.props.dispatch(storeActions.getFeaturedPlaylists())
  }

  handleOnChangeOffset(event) {
    this.props.dispatch(storeActions.uptateOffset(event.target.value))
    this.props.dispatch(storeActions.getFeaturedPlaylists())
  }

  render() {
    const { countries, localeList, limit } = this.props.filterFields
    const selectedCountry = this.props.filters.country
    const selectedLocale = this.props.filters.locale
    const selectedTimestamp = this.props.filters.timestamp
    const selectedLimit = this.props.filters.limit

    if (this.props.loading) {
      return <Loading />
    }

    return (
      <WarpFilter>
        <div className="coutries">
          <TitleFilter>Choose a country:</TitleFilter>{' '}
          {countries.map(country => (
            <FilterCountries
              key={country.value}
              action={event => this.handleOnChangeCountry(event)}
              checked={selectedCountry}
              text={country.name}
              value={country.value}
              options={countries}
              name="countries"
            />
          ))}
        </div>

        <div className="locale">
          <TitleFilter>Choose a locale:</TitleFilter>
          <FilterLocale
            action={locale => this.handleOnChangeLocale(locale)}
            selected={selectedLocale}
            options={localeList}
          />
        </div>

        <div className="timestamp">
          <TitleFilter>Choose a date:</TitleFilter>
          <FilterTimestamp
            action={value => this.handleOnChangeTimestamp(value)}
            value={selectedTimestamp}
          />
        </div>

        <div className="limit">
          <TitleFilter>How many items?</TitleFilter>
          <FilterLimit
            maxValue={limit.max}
            minValue={limit.min}
            value={selectedLimit}
            action={value => this.handleOnChangeLimit(value)}
          />
        </div>

        <div className="offset">
          <TitleFilter>Start from?</TitleFilter>
          <FilterOffset
            placeholder="0"
            max={50}
            min={1}
            onChange={event => this.handleOnChangeOffset(event)}
          />
        </div>
      </WarpFilter>
    )
  }
}

const mapStateToProps = state => ({
  hasFilterFields: state.featuredPlaylist.hasFilterFields,
  loading: state.featuredPlaylist.loading,
  filters: state.featuredPlaylist.filters,
  filterFields: state.featuredPlaylist.filterFields
})

export default connect(mapStateToProps)(FeaturedPlaylist)
