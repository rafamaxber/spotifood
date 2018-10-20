import React from 'react'

import { Main, Limit } from '../../components/Layout'
import { Header } from '../../components/Header'
import { BigInputTheme } from '../../components/Form'

const countries = [
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

export default () => (
  <Main>
    <Header />
    <Limit>
      <BigInputTheme
        searchBig
        type="search"
        placeholder="Find a favorite playlist..."
        autofocus
      />
    </Limit>
    <hr />
    <Limit>
      <form>
        <div className="coutries">
          {countries.map(countrie => (
            <label className="countrie">
              <input type="radio" name="countrie" value={countrie.value} />
              <img
                src={`https://www.countryflags.io/${removeTheCountryLanguageReference(
                  countrie.value
                )}/flat/64.png`}
                alt={countrie.value}
              />
              {countrie.name}
            </label>
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

const removeTheCountryLanguageReference = value => value.replace(/.+_/gi, '')
