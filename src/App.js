//import React from 'react';
import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import {selectUser , login, logout } from './features/counter/userSlice.js'
import Feed from './Feed';
//import { useSelector } from 'react-redux';
import { useDispatch , useSelector } from "react-redux";
//import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

import Login from './Login'
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    //eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;