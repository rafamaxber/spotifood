import React from 'react'
import styled from 'styled-components'
import { Input } from '../Form'
import { flagPath } from '../../utils/countryflag.js'

const Country = styled.div`
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

const Label = styled.label`
  padding: 0 5px;
  display: block;
`

const Radiobox = styled(Input)`
  display: none;
`

const Image = styled.img`
  display: block;
  width: 100%;
  cursor: pointer;
  transition: transform ease 0.2s;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.9);
  }
`

export const TitleFilter = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: block;
  width: 100%;
  color: #fff;
  margin-bottom: 1%;
`

export const FilterCountries = ({ action, name, checked, text, value }) => (
  <Country active={checked}>
    <Label aria-label={text}>
      <Radiobox
        type="radio"
        onChange={action}
        value={value}
        name={name}
        checked={checked}
      />
      <Image src={flagPath(value)} alt={text} title={text} />
    </Label>
  </Country>
)
