import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  max-width: 18%;
  padding-bottom: 10px;
  margin-bottom: 1%;
  color: #fff;
  @media (max-width: 768px) {
    max-width: 30%;
  }
  @media (max-width: 460px) {
    max-width: 48%;
  }
`
const Image = styled.img`
  display: block;
  border: none;
`
const Title = styled.h1`
  font-size: 18px;
  color: #fff;
  margin: 7px 0 5px;
`
const SubTitle = styled.h2`
  font-size: 14px;
  color: #fff;
`
const Button = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  margin-top: 10px;
  :hover {
    text-decoration: underline;
  }
`

export const Card = ({ image, subTitle, title, link, children }) => (
  <StyledCard>
    <Image src={image} alt={title} />
    <Title>{title}</Title>
    {subTitle && <SubTitle>{subTitle}</SubTitle>}
    {children}
    <Button href={link.href}>{link.name}</Button>
  </StyledCard>
)
