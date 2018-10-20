import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  .input-range {
    margin-top: 20px;
    .input-range__track--active {
      background: #1ed760;
    }
    .input-range__slider {
      background: #e31c2b;
      border-color: #e31c2b;
    }
    .input-range__label .input-range__label--min,
    .input-range__label .input-range__label--max,
    .input-range__label-container {
      font-weight: bold;
    }
  }
`

export const FilterLimit = ({ maxValue, minValue, value, action }) => (
  <React.Fragment>
    <GlobalStyle />
    <InputRange
      maxValue={20}
      minValue={0}
      value={0}
      onChange={value => console.log(value)}
    />
  </React.Fragment>
)
