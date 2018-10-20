import React from 'react'

import { Main, Limit } from '../../components/Layout'
import { Header } from '../../components/Header'
import { BigInputTheme } from '../../components/Form'
import { FilterCountries, TitleFilter } from '../../components/Filters'

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

export default class Index extends React.Component {
  state = {
    countries: []
  }
  componentDidMount() {
    //TODO: GET filters
    this.setState({ countries: countries })
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
    const { countries } = this.state

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
          <form>
            <div className="coutries">
              <TitleFilter>Choose a country:</TitleFilter>
              {countries.map(country => (
                <FilterCountries
                  key={country.value}
                  checkbox={{
                    handle: event => this.handleOnChangeCountry(event),
                    value: country.value,
                    checked: country.checked,
                    name: 'countries'
                  }}
                  image={{
                    src: `https://www.countryflags.io/${removeTheCountryLanguageReference(
                      country.value
                    )}/flat/64.png`,
                    alt: country.name
                  }}
                />
              ))}
            </div>

            <div className="locale">locale</div>
            <div className="timestamp">timestamp</div>
            <div className="limit">limit</div>
            <div className="offset">offset</div>
          </form>
        </Limit>
      </Main>
    )
  }
}

const removeTheCountryLanguageReference = value => value.replace(/.+_/gi, '')
