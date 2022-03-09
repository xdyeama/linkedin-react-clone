import React from 'react'
import { Container } from './InputAttachment.style'

function InputAttachment({ title, Icon, color}) {
  return (
    <Container className="input-attachment">
      <Icon style={{ color: color}}/>
      <h4>{title}</h4>
    </Container>
  )
}

export default InputAttachment
