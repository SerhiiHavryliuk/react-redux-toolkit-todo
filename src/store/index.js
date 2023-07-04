import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './todoSlize'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})