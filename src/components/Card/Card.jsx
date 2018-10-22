import React from 'react'
import styled from 'styled-components'
import t from 'prop-types'

const StyledCard = styled.div`
  max-width: 18%;
  padding-bottom: 10px;
  margin-bottom: 1%;
  color: ${props => props.color};
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
  margin: 7px 0 5px;
`
const SubTitle = styled.h2`
  font-size: 14px;
`
const Button = styled.a`
  color: currentColor;
  text-decoration: none;
  font-size: 14px;
  margin-top: 10px;
  :hover {
    text-decoration: underline;
  }
`
const Description = styled.div`
  font-size: 14px;
  color: ${props => props.color};
`

export const Card = ({ theme, image, subTitle, title, link, children }) => (
  <StyledCard color={theme.mainColor}>
    {image && <Image src={image} alt={title} />}
    <Title>{title}</Title>
    {subTitle && <SubTitle>{subTitle}</SubTitle>}
    {children && (
      <Description color={theme.descriptionColor}>{children}</Description>
    )}
    <Button href={link.href}>{link.name}</Button>
  </StyledCard>
)

Card.propTypes = {
  /** Image source path */
  image: t.string,
  /** Card subTitle */
  subTitle: t.string,
  /** Card title */
  title: t.string.isRequired,
  /** Card link props */
  link: t.shape({
    href: t.string,
    name: t.string
  }),
  /** We can change the card font color */
  theme: t.shape({
    mainColor: t.string,
    descriptionColor: t.string
  })
}

Card.defaultProps = {
  theme: {
    mainColor: '#fff',
    descriptionColor: '#cecece'
  },
  image: '',
  subTitle: '',
  link: {
    href: '',
    name: ''
  }
}
