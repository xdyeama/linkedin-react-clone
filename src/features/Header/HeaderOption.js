import { Avatar } from '@material-ui/core'
import React from 'react'
import { Container } from './HeaderOption.style'


function HeaderOption({ title, Icon, avatar, onClick }) {
  return (
    <Container onClick={onClick}>
      {Icon && <Icon className='headerOption__icon'/>}
      {avatar && <Avatar className="avatar__img" src={avatar}/>}
      <h3 className="headerOption__title">{title}</h3>
    </Container>
  )
}

export default HeaderOption