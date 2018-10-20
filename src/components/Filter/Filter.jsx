import React from 'react'
import styled from 'styled-components'

const Countrie = styled.div`

`
const Label = styled.label`

`

const Radiobox = styled.input`

`

const Image = styled.label`

`

export const FilterCountrie = ({ checkbox, image, status }) =>
  <Countrie>
    <Label>
      <Radiobox type="radio" name="countrie" />
      {image.src && <Image src={image.src} alt={image.alt}/>}
    </Label>
  </Countrie>
