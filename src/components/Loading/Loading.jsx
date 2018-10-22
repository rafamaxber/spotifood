import React from 'react'
import styled from 'styled-components'
import loadingIcon from '../../assets/images/ellipsis-load.svg'

const LoadingBar = styled.div`
  position: relative;
  width: 100px;
  margin: auto;
  height: 100%;
  min-height: 100px;
`

const Image = styled.img`
  width: 80%;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 5%;
  background-color: rgba(255, 255, 255, 0.88);
  z-index: 10;
  border-radius: 50%;
  padding: 10px;
`

const Loading = () => (
  <LoadingBar>
    <Image src={loadingIcon} alt="loading..." />
  </LoadingBar>
)

export default Loading
