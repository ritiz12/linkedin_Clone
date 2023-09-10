import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home'
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
function Header() {
  return (
    <div  className='header' >



     <div className='header_left'>
     <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>


        <div className='header_search'>
        < SearchIcon />
        <input type='text'/>

        </div>

     </div>

     <div className="header_right">

        <HeaderOption Icon={HomeIcon} title = "Home" />
        <HeaderOption  Icon = {SupervisorAccountIcon} title="My Network"/>

        <HeaderOption  Icon = {WorkIcon} title="Jobs"/>
        <HeaderOption  Icon = {MessageIcon} title="Messaging"/>
        <HeaderOption  Icon = {NotificationsActiveIcon} title="Notisfication"/>
        <HeaderOption avatar= {AccountCircleIcon} title="me"/>
     </div>

    </div>
  )
}

export default Header
