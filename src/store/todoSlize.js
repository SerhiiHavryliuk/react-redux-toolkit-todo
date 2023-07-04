import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    text: "start text"
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      console.log(action.payload)
      state.value += action.payload.test1
    },
    changeText: (state) => {
      state.text = "new text"
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, changeText } = counterSlice.actions

export default counterSlice.reducer