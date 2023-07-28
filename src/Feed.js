import React from 'react'
import './Feed.css'
import InputOption from './InputOption';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Post from './Post'
import { useState, useEffect } from 'react';
import { db } from './firebase';

import { useSelector } from "react-redux";
//import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
import firebase from "firebase/compat/app";





function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
 // const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc") /* to make them order with time */
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "ritika",
      description: "hjd",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed-inputContainer">
        <div className="feed-input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className='feed_inputOptions '>
        <InputOption Icon = {ImageIcon}  title  = "Photo" color = "#70B5F9" />
        <InputOption
            title="Video"
            Icon={SubscriptionsIcon}
            color="#E7A33E"
          />

            <InputOption title="Event" Icon={EventIcon} color="#C0CBCD" />
                      <InputOption
            title="Write article"
            Icon={EditCalendarIcon}
            color="#7FC15E"
          />


      </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
