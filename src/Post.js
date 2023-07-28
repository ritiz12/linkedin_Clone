import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import InputOptions from './InputOption';
import './post.css'
import { Avatar } from '@material-ui/core'
function Post({name, description , message , photoUrl}) {
  return (
    <div className='post'>
    <div className='post_header'>
        <Avatar/>
        <div className='post_info'>
            <h2>Ritika Dhiman</h2>
            <p>Description</p>
        </div>
    </div>

       <div className='post_body'>
       <p>Message goes here</p>

       </div>

       <div className="post_button">
        <InputOptions Icon={ThumbUpIcon} title="Like" color="gray" />
        <InputOptions Icon={AddCommentIcon} title="Comment" color="gray" />
        <InputOptions Icon={ShareIcon} title="Share" color="gray" />
        <InputOptions Icon={SendIcon} title="Send" color="gray" />
      </div>

    </div>
  )
}

export default Post
