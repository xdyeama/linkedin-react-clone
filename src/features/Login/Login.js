import React, { useState } from 'react'
import { Container } from './Login.style'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../user/userSlice'

function Login() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch();


  const registerToApp = (e) => {
    e.preventDefault()
    if(!name){
      return alert("Please enter the full name")
    }
    
    createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
      updateProfile(userAuth.user, {
        displayName: name,
        photoURL: profilePic,
      }).then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        }))
      })
    }).catch(error => alert(error.message));
  }

  const loginToApp = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then(
      (userAuth) => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.photoURL,
        }))
      }
    ).catch((err) =>   alert(err));
  }  
  return (
    <Container>
      <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011-2019.png" />
      <form className="login__form">
        <input type="text" placeholder="Full Name (required if registering)" value={name} onChange={e => setName(e.target.value)}/>
        <input type="text" placeholder='Profile picture URL' value={profilePic} onChange={e => setProfilePic(e.target.value)} />
        <input type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button type="submit" onClick={loginToApp}>Sign in</button>
      </form>
      <p>Not a member? <span className="login__register" onClick={registerToApp}>Register now</span></p>
    </Container>
  )
}

export default Login