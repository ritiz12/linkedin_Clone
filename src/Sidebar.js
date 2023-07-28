import React from 'react'
import "./Sidebar.css"

import { Avatar } from '@material-ui/core'




function Sidebar  () {


    const recentItem  = (topic) => (
        <div className= "sidebar_recentItem">
           <span className="sidebar_hash"># </span>
           <p>{topic}</p>


        </div>
    );

  return (
    <div className='sidebar'>
     <div className='sidebar_top'>
        <img src='https://marketplace.canva.com/EAE-xnqWvJk/1/0/800w/canva-retro-smoke-and-round-light-desktop-wallpapers-Gxa9RkovQsE.jpg' alt=''/>
        <Avatar className='sidebar_avatar'/>
        <h2>Ritika Dhiman</h2>
        <h4>dhimanritika1212@gmail.com</h4>
     </div>
     <div className='sidebar_stats'>

     <div className='sidebar_stat'>
     <p>Who viewed you</p>
     <p className='sidebar_statNumber'>2,861</p>

     </div>
     <div className='sidebar_stat'>
     <p>Views on post</p>
     <p className='sidebar_statNumber'>9,169</p>

     </div>
    </div>

      <div className='sidebar_bottom'>
      <h1>Recent</h1>
        {  recentItem("reactjs") }
      { recentItem('programming')}
       { recentItem('design')}
       { recentItem('testing')}
       { recentItem('developer')}

      </div>
    </div>
  );
}


export default Sidebar;
