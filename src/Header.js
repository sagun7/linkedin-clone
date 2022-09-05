import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

const Header= () => {
    const dispatch = useDispatch();
    const logoutofApp =() => {
        dispatch(logout());
        auth.signOut();

    }

  return (
    <div className='header'>
        
        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
            <div className="header__search">
              <SearchIcon />
              <input placeholder='search' type="text" />

            </div>

        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={GroupIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={MailOutlineIcon} title='Message' />
            <HeaderOption Icon={MarkUnreadChatAltIcon} title='Notifications'/>
            <HeaderOption avatar='https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png' 
                title='Me'
                onClick={logoutofApp}
                />
            


        </div>


    </div>
  )
}

export default Header;


