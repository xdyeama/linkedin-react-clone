import React from 'react'
import { Container } from './Sidebar.style'
import { Avatar } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { useSelector } from 'react-redux';
import { selectUser } from '../user/userSlice';


function Sidebar() {
  const user = useSelector(selectUser)

  const recentItem = (topic) => {
    return(
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">
        #
      </span>
      <p>{topic}</p>
    </div>
    )
  }

  return (
    <Container className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        <Avatar className="sidebar__avatar" src={user.photoUrl}/>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">  
        <div className="sidebar__stat">
          <p> Who viewed you?</p>
          <p className="sidebar__statNumber">2,321</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,565</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottom-btn">
          <h4>Groups</h4>
        </div>
        <div className="sidebar__bottom-btn w__icon">
          <h4>Events</h4>
          <AddIcon className="add-icon"/>
        </div>
        <div className="sidebar__bottom-btn">
          <h4>Followed Hashtags</h4>
        </div>
      </div>
      <div className="discover-more__btn">
        <p>Discover more</p>
      </div>
      <div className="sidebar__bottom-bot">
        {recentItem("ReactJS")}
        {recentItem("VueJS")}
        {recentItem("AngularJS")}
        {recentItem("MagicaVoxel")}
      </div>
    </Container>
  )
}

export default Sidebar