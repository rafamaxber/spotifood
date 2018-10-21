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
import getLocaleName from '../../utils/allLocaleNames.js'
import { capitalizeFirstLetter } from '../../utils'
import * as FeaturedPlaylistCreators from '../../store/featuredPlaylist'

const locale = [
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
    this.boundActionCreators = bindActionCreators(
      FeaturedPlaylistCreators,
      dispatch
    )

    this.state = {
      localeList: [],
      selectedLocale: {}
    }
  }

  componentDidMount() {
    this.props.dispatch(FeaturedPlaylistCreators.getFeaturedPlaylistFilters())

    this.setState({
      localeList: this.translateLocaleList(locale)
    })
  }

  translateLocaleList(localeList: []) {
    return localeList.map(locale => ({
      value: locale.value,
      label: capitalizeFirstLetter(getLocaleName(locale.name))
    }))
  }

  handleOnChangeCountry(event) {
    this.props.dispatch(
      FeaturedPlaylistCreators.selectCountry(event.target.value)
    )
  }

  handleOnChangeLocale(event) {
    this.setState({ selectedLocale: event })
  }

  getFilteredField({ field, key, value }) {
    const filteredField = this.props.filterFields.filter(
      item => item[key] === value
    )

    if (filteredField[0]) {
    }
  }

  render() {
    const { selectedLocale } = this.state
    const { countries, localeList } = this.props.filterFields
    const selectedCountry = this.props.filters.country

    return (
      <WarpFilter>
        <div className="coutries">
          <TitleFilter>Choose a country:</TitleFilter>{' '}
          {countries.map((
            country
          ) => (
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
            action={event => this.handleOnChangeLocale(event)}
            selected={selectedLocale}
            options={localeList}
          />
        </div>

        <div className="timestamp">
          {/* TODO: Improve component Date */}
          <TitleFilter>Choose a date:</TitleFilter>
          <FilterTimestamp
            action={value => console.log(value)}
            value={new Date()}
          />
        </div>

        <div className="limit">
          <TitleFilter>How many items?</TitleFilter>
          <FilterLimit />
        </div>

        <div className="offset">
          <TitleFilter>Start from?</TitleFilter>
          <FilterOffset />
        </div>
      </WarpFilter>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.featuredPlaylist.loading,
  filters: state.featuredPlaylist.filters,
  filterFields: state.featuredPlaylist.filterFields
})

export default connect(mapStateToProps)(FeaturedPlaylist)
