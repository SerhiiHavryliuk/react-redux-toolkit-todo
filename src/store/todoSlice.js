import {createSlice} from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'counter',
  initialState: {
    textFieldValue: '',
    todoList: [],
  },
  reducers: {
    changeTextField: (state, action) => {
      state.textFieldValue = action.payload;
    },
    addTodo: (state, action) => {
      const newTodo = {
        id: new Date().toString(),
        description: state.textFieldValue,
        isCompleted: false,
      }
      state.todoList.push(newTodo);
      state.textFieldValue = '';
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload;
      state.todoList = state.todoList.filter(
        (todo) => (todo.id !== todoId)
      )
    },
    toggleTodo: (state, action) => {
      const todoId = action.payload;
      state.todoList = state.todoList.map(
        (todo) => {
          if (todo.id === todoId) {
            return (
              {
                ...todo,
                isCompleted: !todo.isCompleted,
              }
            )
          }
          return todo;
        }
      )
    }
  }
})

export const {changeTextField, addTodo, deleteTodo, toggleTodo} = todoSlice.actions

export default todoSlice.reducer