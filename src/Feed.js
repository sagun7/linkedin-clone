import React,{useState, useEffect} from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption.js'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import Post from './Post';
import { db } from './firebase.js';



const Feed = () => {
const [posts, setPosts] = useState([]);
const [input, setInput] = useState('');

useEffect(()=>{
    db.collection('posts').orderBy('timeStamp','desc').onSnapshot((snapshot) =>{
        setPosts(
            snapshot.docs.map(doc =>{
                return {
                    id: doc.id,
                    data: doc.data(),
                }
            })
        )
    })
},[]);

const sendPost=(e) => {
    e.preventDefault();

    db.collection('posts').add({
        name: 'Sagun Panthi',
        description: 'This is a test',
        message: input,
        photoUrl: '',
        timeStamp: firebase.firestore.FieldValue.serverTimestamp()

    })
    setInput('');
}

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption title='Photo' Icon={ImageIcon} color='#70B5F9' />
                <InputOption title='Video' Icon={SubscriptionsIcon} color='#E7a33e' />
                <InputOption title='Event' Icon={EventAvailableIcon} color='#c0cbcd' />
                <InputOption title='Write Article' Icon={CalendarMonthIcon} color='#7fc15e' />

            </div>

        </div>
        {posts.map(({id, data:{name, description, message, photoUrl}})=>(
            <Post 
                key ={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
            />)
        
        )
            
        }

      
    </div>
  )
}

export default Feed