import React from 'react'
import styled from 'styled-components'
import t from 'prop-types'

const WrapLogin = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 5% auto;
  background-color: #fff;
  padding: 5% 20px;
  border-radius: 10px;
`
const HeroMessage = styled.div`
  text-align: center;
  font-size: 22px;
`
const Button = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: var(--secundary-color, #000);
  padding: 10px 30px;
  border-radius: 20px;
  display: block;
  width: 95%;
  max-width: 300px;
  text-align: center;
  margin: 7% auto 0px;
  cursor: pointer;
  box-shadow: 0px 0px 10px #c9c9c9;
  text-decoration: none;
  transition: transform ease 0.2s, font-size ease 0.2s;
  :hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 15px #c9c9c9;
  }
  :active {
    transform: scale(0.98);
  }
`

const LoginArea = ({ handleLogin }) => (
  <WrapLogin>
    <HeroMessage>
      Hello, welcome to Spotifood, to see all featured playlist is necessary
      make login in your spotify account.
    </HeroMessage>
    <Button onClick={handleLogin}>Click in here to make login</Button>
  </WrapLogin>
)

LoginArea.propTypes = {
  handleLogin: t.func.isRequired
}

export default LoginArea
