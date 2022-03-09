import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth';

import { GlobalStyle } from './GlobalStyle'
import Header from './features/Header/Header';
import Login from './features/Login/Login';
import Sidebar from './features/Sidebar/Sidebar'
import Feed from './features/Feed/Feed'
import Widgets from './features/Widgets/Widgets';
import { login, logout, selectUser } from './features/user/userSlice';
import { auth } from './firebase'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        // User is logged in
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL,
        }))
      }else{
        // User is logged out
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app"> 
      {/* Global Style */}   
      <GlobalStyle/> 
      {/* Header */}
      <Header />
      {!user ? (<Login />)
            : (
            <div className="app__body">
              { /* sidebar */ }
              <Sidebar />
              { /* Feed */ }
              <Feed />
              {/** Widgets */}
              <Widgets />
            </div>
            )}
        
        
    </div>
  );
}

export default App;