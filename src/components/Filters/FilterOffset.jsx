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

export const FilterOffset = ({ value, action }) => (
  <StyledInput
    type="number"
    placeholder="1"
    min="1"
    max="50"
    value={0}
    onChange={value => console.log(value)}
  />
)
