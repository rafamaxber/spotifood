import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
`

export const BigInputTheme = styled(Input)`
  width: 95%;
  border: none;
  height: 80px;
  margin: auto;
  padding: 2px 2%;
  font-weight: bold;
  font-size: 25px;
  background-color: #171717;
  color: #fff;
  ::placeholder {
    font-weight: normal;
    color: #fff;
    opacity: .5;
  }
`

export default props => <Input {...props} />
