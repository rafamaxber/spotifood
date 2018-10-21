import React from 'react'
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

export const FilterOffset = (props, { onChange }) => (
  <StyledInput {...props} type="number" />
)
