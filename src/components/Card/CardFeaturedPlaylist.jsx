import React from 'react'
import styled from 'styled-components'
import { Card } from '.'

const Description = styled.div`
  font-size: 14px;
  color: #cecece;
`

export const CardFeaturedPlaylist = ({
  image,
  subTitle,
  title,
  link,
  tracks
}) => (
  <Card image={image} title={title} link={link}>
    <Description>Has {tracks.total} tracks</Description>
  </Card>
)
