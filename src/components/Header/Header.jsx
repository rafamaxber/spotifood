import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/spotifood-logo.svg'

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`

const Logo = styled.a`
  display: inline-block;
`

const Image = styled.img`
  display: block;
  width: 100%;
  max-height: 25px;
`

export default () => (
  <Header>
    <Logo href="/">
      <Image src={logo} />
    </Logo>
  </Header>
)
