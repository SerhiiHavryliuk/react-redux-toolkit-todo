import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import counterSecondReducer from './counterSecondSlice'
import todoReducer from './todoSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    counterSecond: counterSecondReducer,
    todo: todoReducer,
  }
})