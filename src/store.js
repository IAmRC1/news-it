import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import news from './slices/newsSlice'


const reducer = combineReducers({
  news,
})
const store = configureStore({
  reducer,
})
export default store;