import React from 'react'
import styled from 'styled-components'
import loadingIcon from '../../assets/images/ellipsis-load.svg'

const LoadingBar = styled.div`
  position: relative;
  width: 100px;
  margin: auto;
  height: 100%;
`

const Image = styled.img`
  width: 100%;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 5%;
  z-index: 10;
`

const Loading = () => (
  <LoadingBar>
    <Image
      className="img-loading"
      src={loadingIcon}
      alt="loading..."
    />
  </LoadingBar>
)

export default Loading
