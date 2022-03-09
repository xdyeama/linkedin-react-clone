import React from 'react'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import { Container } from './DropdownButton.style';

function DropdownButton() {
  return (
    <Container>
      <MenuOutlinedIcon className="menu__icon" />
    </Container>
  )
}

export default DropdownButton