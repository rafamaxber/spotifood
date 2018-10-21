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

/*
const mock = {
  filters: [
    {
      id: 'locale',
      name: 'Locale',
      values: [
        {
          value: 'en_AU',
          name: 'en_AU'
        },
        {
          value: 'de_DE',
          name: 'de_DE '
        },
        {
          value: 'pt_BR',
          name: 'pt_BR'
        },
        {
          value: 'fr_FR',
          name: 'fr_FR'
        },
        {
          value: 'en_US',
          name: 'en_US'
        },
        {
          value: 'es_AR',
          name: 'es_AR'
        }
      ]
    },
    {
      id: 'country',
      name: 'País',
      values: [
        {
          value: 'AU',
          name: 'Australia'
        },
        {
          value: 'DE',
          name: 'Alemanhã'
        },
        {
          value: 'BR',
          name: 'Brasil'
        },
        {
          value: 'PT',
          name: 'Portugal'
        },
        {
          value: 'en_US',
          name: 'EUA'
        },
        {
          value: 'RU',
          name: 'Rússia'
        }
      ]
    },
    {
      id: 'timestamp',
      name: 'Data e Horário',
      validation: {
        primitiveType: 'STRING',
        entityType: 'DATE_TIME',
        pattern: 'yyyy-MM-ddTHH:mm:ss'
      }
    },
    {
      id: 'limit',
      name: 'Quantidade',
      validation: {
        primitiveType: 'INTEGER',
        min: 1,
        max: 50
      }
    },
    {
      id: 'offset',
      name: 'Página',
      validation: {
        primitiveType: 'INTEGER'
      }
    }
  ]
}
*/
class FeaturedPlaylist extends React.Component {
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
  }

  handleOnChangeLocale(locale) {
    this.props.dispatch(storeActions.updateLocale(locale.value))
  }

  handleOnChangeTimestamp(value) {
    this.props.dispatch(storeActions.uptateTimestamp(value))
  }

  handleOnChangeLimit(value) {
    this.props.dispatch(storeActions.uptatelimit(value))
  }

  handleOnChangeOffset(event) {
    this.props.dispatch(storeActions.uptateOffset(event.target.value))
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
