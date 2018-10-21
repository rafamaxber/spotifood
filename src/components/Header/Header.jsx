import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/spotifood-logo.svg'
import svgSprite from '../../assets/images/sprite.svg'

import { Limit } from '../Layout'

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  background-color: #000;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to bottom, black, rgba(0, 0, 0, 0)) 1 100%;
  margin-bottom: 2%;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    height: 3px;
    width: ${props => props.load}%;
    left: 0;
    bottom: -5px;
    background: #1ed760;
    background: -moz-linear-gradient(
      left,
      #1ed760 0%,
      #e31c2b 49%,
      #1ed760 100%
    );
    background: -webkit-linear-gradient(
      left,
      #1ed760 0%,
      #e31c2b 49%,
      #1ed760 100%
    );
    background: linear-gradient(
      to right,
      #1ed760 0%,
      #e31c2b 49%,
      #1ed760 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1ed760', endColorstr='#1ed760',GradientType=1 );
  }
`

const Logo = styled.a`
  display: block;
  margin: auto;
`

const Image = styled.img`
  display: block;
  max-height: 30px;
  @media (max-width: 768px) {
    max-height: 25px;
  }
`

const FlexLimit = styled(Limit)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const SvgIcon = styled.svg`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export default ({ toogleFilter, toogleSearchBar, loadProgress = 100 }) => (
  <Header load={loadProgress}>
    <FlexLimit>
      {toogleFilter && (
        <SvgIcon onClick={toogleFilter}>
          <use xlinkHref={`${svgSprite}#icon-filter`} />
        </SvgIcon>
      )}
      <Logo href="/">
        <Image src={logo} />
      </Logo>
      {toogleSearchBar && (
        <SvgIcon onClick={toogleSearchBar}>
          <use xlinkHref={`${svgSprite}#icon-search`} />
        </SvgIcon>
      )}
    </FlexLimit>
  </Header>
)
