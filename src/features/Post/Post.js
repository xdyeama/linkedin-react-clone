import React, { forwardRef} from 'react'
import { Container } from './Post.style'
import { Avatar } from '@material-ui/core'
import InputAttachment from '../Feed/InputAttachment'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'

const Post = forwardRef(({ name, desc, msg, photoUrl }, ref) => {
  return (
    <Container className="post" ref={ref}>
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{msg}</p>
      </div>
      <div className="post__buttons">
        <InputAttachment Icon={ThumbUpAltOutlined} title="Like" color="gray"/> 
        <InputAttachment Icon={ChatOutlined} title="Comment" color="gray" />
        <InputAttachment Icon={ShareOutlined} title="Share" color="gray"/>
        <InputAttachment Icon={SendOutlined} title="Send" color='gray' />
      </div>
    </Container>
  )
})

export default Post