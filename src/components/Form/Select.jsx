import React from 'react'
import ReactSelect from 'react-select'
import styled from 'styled-components'

const StyledReactSelect = styled(ReactSelect)`
  & .react-select__menu {
    display: none !important;
  }
  & .react-select__control {
    display: none !important;
  }
`

const Select = props => <ReactSelect {...props} />

export default Select
