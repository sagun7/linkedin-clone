import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

const Login = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();
    
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl : userAuth.user.photoURL
            }

            )).catch(error => alert(error));
        })

    };

    const register =() =>{
        if(!name){
            return alert('Please enter a full name')
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName : name,
                photoURL: profilePic,
            })
            .then(()=>{
                dispatch(login({
                    email : userAuth.user.email,
                    uid : userAuth.user.uid,
                    displayName : name,
                    photoUrl: profilePic,

                }))
            })
        }).catch(error => {
            alert(error);
        })


    };

  return (
    <div className='login'>
       <img src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' alt="No internet" />
    <form>
        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Full Name (required if registering' />
        <input value= {profilePic} onChange ={(e) => setProfilePic(e.target.value)} type="text" placeholder='Profile Picture URL' />
        <input value={email} onChange={(e)=> setEmail(e.target.value)}  type="text" placeholder='Email' />
        <input value={password} onChange={(e)=> setpassword(e.target.value)}  type= 'password' placeholder='Password' />

        <button type='submit' onClick={loginToApp}> Sign in</button>

    </form>
    <p>Not a member? <span className='login__register' onClick={register}> Register now.</span></p>
    </div>
  )
}

export default Login


