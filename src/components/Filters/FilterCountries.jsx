import React from 'react'
import styled from 'styled-components'
import t from 'prop-types'
import { flagPath } from '../../utils/country.js'

import { Input } from '../Form'
import { Image, Label } from '.'

const Country = styled.a`
  max-width: 50px;
  display: inline-block;
  margin: 2px;
  position: relative;
  transition: outline ease 0.2s;
  :after {
    content: '✔';
    color: var(--success-color);
    display: ${props => (props.active ? 'block' : 'none')};
    justify-content: center;
    align-content: center;
    padding: 0px;
    font-size: 30px;
    height: 100%;
    width: 100%;
    background-color: rgb(0,0,0,.3);
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0
    left: 0;
    right: 0;
    margin: auto;
  }
`

const Radiobox = styled(Input)`
  opacity: 0;
  position: absolute;
  :focus + img {
    transform: scale(1.1);
  }
`

export const FilterCountries = ({ action, name, checked, text, value }) => (
  <Country active={value === checked}>
    <Label aria-label={text}>
      <Radiobox
        type="radio"
        onChange={action}
        value={value}
        name={name}
        checked={value === checked}
      />
      <Image src={flagPath(value)} alt={text} title={text} />
    </Label>
  </Country>
)

FilterCountries.propTypes = {
  /** Method to select country */
  action: t.func.isRequired,
  /** Field name */
  name: t.string.isRequired,
  /** Selected value a string like BR */
  checked: t.string.isRequired,
  /** Field title */
  text: t.string.isRequired,
  /** Field value */
  value: t.string.isRequired
}
