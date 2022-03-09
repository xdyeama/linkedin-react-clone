import React from 'react'
import "./Header.style.js"
import HeaderOption from './HeaderOption.js';
import SearchIcon from '@material-ui/icons/Search'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import { Container } from './Header.style'
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout } from '../user/userSlice.js';
import { auth } from '../../firebase.js';


const Header = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <Container className="header">
      <div className="header__left">
        {/** Logo img */}
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        {/** Search bar */}
        <div className="header__search">
          {/** Search Icon */}
          <SearchIcon />
          {/** Search input */}
          <input type="text" name="" placeholder="Find people, jobs and more" id="" />
        </div>
      </div>
      <div className="header__right">
        {/*
        <ul>
          <li><HomeOutlinedIcon/>Home</li>
          <li><PeopleAltOutlinedIcon/>My Network</li>
          <li><WorkOutlineOutlinedIcon/>Jobs</li>
          <li><CommentOutlinedIcon/>Messaging</li>
          <li><NotificationsOutlinedIcon/>Notifications</li>
          <li><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="profile__logo"/>Me</li>
        </ul> */}
        <HeaderOption title="Home" Icon={HomeOutlinedIcon}/>
        <HeaderOption title="My Network" Icon={PeopleAltOutlinedIcon}/>
        <HeaderOption title="Jobs" Icon={WorkOutlineOutlinedIcon} />
        <HeaderOption title="Messaging" Icon={CommentOutlinedIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsOutlinedIcon} />
        <HeaderOption title={user ? user.displayName : "Login"} avatar={user ? user.photoUrl : ""} onClick={logoutOfApp}/>
      </div>
    </Container>
  )
}

export default Header