import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

const Sidebar = () => {

const user = useSelector(selectUser)

const recentItem = (topic) => (
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>

    </div>
);

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="http://www.flipbuilder.com/templates-themes/img/theme/classical_flowery.jpg
            " alt="" />
            <Avatar src={user.photoUrl} className='sidebar__avatar'> {user.email[0]} </ Avatar>
            <h2> {user.displayName}</h2>
            <h4> {user.email}</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p> Who viewed you</p>
                <p className="sidebar__statNumber">200</p>
            </div>
            <div className="sidebar__stat">
                <p> Views on Posts</p>
                <p className="sidebar__statNumber">100</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p> Recent</p>
            {recentItem('reactjs')}
            {recentItem('mongodb')}
            {recentItem('node')}
            {recentItem('express')}
        </div>
    </div>
  )
}

export default Sidebar