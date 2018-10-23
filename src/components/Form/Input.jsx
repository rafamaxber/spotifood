import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
`

export const BigInputTheme = styled(Input)`
  width: 100%;
  height: 80px;
  margin: 0 auto 2%;
  padding: 2%;
  font-weight: bold;
  font-size: 25px;
  background-color: #171717;
  color: #fff;
  ::placeholder {
    font-weight: normal;
    color: #fff;
    opacity: 0.2;
  }
  @media (max-width: 618px) {
    font-size: 19px;
    height: 50px;
  }
`

export default props => <Input {...props} />
