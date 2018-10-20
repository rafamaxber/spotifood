import styled from 'styled-components'

export const Label = styled.label`
  padding: 0 5px;
  display: block;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  cursor: pointer;
  transition: transform ease 0.2s;
  :hover {
    transform: scale(1.05);
  }
  :active {
    transform: scale(0.9);
  }
`

export const TitleFilter = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: block;
  width: 100%;
  color: #fff;
  margin-bottom: 1%;
`
