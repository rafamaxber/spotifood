import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import { Input } from '../Form'

const StyledInput = styled(Input)`
  padding: 9px;
  border-radius: 5px;
  display: block;
  width: 65px;
  border: none;
  box-shadow: none;
`

export const FilterOffset = props => <StyledInput {...props} type="number" />

FilterOffset.propTypes = {
  /** Should receive the same default html input properties */
  props: t.object
}
