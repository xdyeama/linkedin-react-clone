import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import firebase from 'firebase/compat/app'
import { addDoc, getDocs, collection, doc, onSnapshot, serverTimestamp, orderBy, query } from 'firebase/firestore'
import FlipMove from 'react-flip-move'

import {Container} from './Feed.style'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import InputAttachment from './InputAttachment'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from '../Post/Post'
import { useSelector } from 'react-redux'
import { selectUser } from '../user/userSlice'


function Feed() {

  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser)

  useEffect(() =>{
    const postsCollection = collection(db, 'posts')
    const q = query(postsCollection, orderBy("timestamp", "desc"))

    const unsub = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    });

    return unsub;
  }, [])

  const submitPost = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, 'posts'), {   
      name: user.displayName,
      desc: "test post",
      msg: input,
      photoUrl: user.photoUrl,
      timestamp: serverTimestamp(),
    })
    setInput('');
  }

  return (
    <Container className="feed">
      <div className="feed__input-container">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button type="submit" onClick={submitPost} >Send</button>

          </form>
        </div>
        <div className="feed__input-attachments">
          {/* Input attatchments */}
          <InputAttachment title="Photo" Icon={ImageIcon} color="#70B5F9"/>
          <InputAttachment title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
          <InputAttachment title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputAttachment title="Write article" Icon={CalendarViewDayIcon} color="#7FC15E"/>
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, desc, msg, photoUrl }}) => (
          <Post key={id} name={name} desc={desc} msg={msg} photoUrl={photoUrl}/>
        ))}
      </FlipMove>
    </Container>
  )
}

export default Feed