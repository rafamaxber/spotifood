import React from 'react'

import { Input } from '../../components/Form'
import { FilterCountries, TitleFilter } from '../../components/Filters'
import getLocaleName from '../../utils/allLocaleNames'

const countries = [
  {
    value: 'AU',
    name: 'Australia',
    checked: false // custom field
  },
  {
    value: 'DE',
    name: 'Alemanhã',
    checked: false // custom field
  },
  {
    value: 'BR',
    name: 'Brasil',
    checked: false // custom field
  },
  {
    value: 'PT',
    name: 'Portugal',
    checked: false // custom field
  },
  {
    value: 'en_US',
    name: 'EUA',
    checked: false // custom field
  },
  {
    value: 'RU',
    name: 'Rússia',
    checked: false // custom field
  }
]

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

export default class Filters extends React.Component {
  state = {
    countries: [],
    localeList: []
  }
  componentDidMount() {
    //TODO: GET filters
    //TODO: SET country and locale default by navigator
    /*
      var language = window.navigator.userLanguage || window.navigator.language;
      alert(language);
    */
    this.setState({ countries: countries })
    this.setState({ localeList: locale })
  }

  handleOnChangeCountry(event) {
    const countries = Array.from(this.state.countries)

    countries.map(country => {
      country.checked = country.value === event.target.value
      return country
    })

    this.setState({ countries })
  }

  render() {
    const { countries, localeList } = this.state

    return (
      <form>
        <div className="coutries">
          <TitleFilter>Choose a country:</TitleFilter>
          {countries.map(country => (
            <FilterCountries
              key={country.value}
              action={event => this.handleOnChangeCountry(event)}
              checked={country.checked}
              text={country.name}
              value={country.value}
              name='countries'
            />
          ))}
        </div>

        <div className="locale">
          <TitleFilter>Choose a locale:</TitleFilter>
          <select>
            <option value="">Find a locale</option>
            {localeList.map(locale => (
              <option value={locale.value}>
                {getLocaleName(locale.value)}
              </option>
            ))}
          </select>
        </div>

        <div className="timestamp">
          {/* TODO: Improve component Date */}
          <TitleFilter>Choose a date:</TitleFilter>
          <Input type="date" placeholder="Choose a date" />
        </div>

        <div className="limit">
          <TitleFilter>Do you want to see how many items?</TitleFilter>
          <Input
            type="number"
            placeholder="Min 1 and max 50"
            min="1"
            max="50"
          />
        </div>

        <div className="offset">
          <TitleFilter>Start from?</TitleFilter>
          <Input type="number" placeholder="1" min="1" max="50" />
        </div>
      </form>
    )
  }
}

