import {configuration} from '@reduxjs/toolkit'
import  userReducer from '../features/userSlice'

export default configuration ({
    reducer :{
        counter : userReducer ,
    }


})