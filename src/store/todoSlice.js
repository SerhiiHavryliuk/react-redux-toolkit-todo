import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
    inputValue: '',
  },
  reducers: {
    changeText: (state, action) => {
      state.inputValue = action.payload;
    },
    addTodo: (state) => {
      const newTodo = {
        id: new Date().toString(),
        description: state.inputValue,
        isCompleted: false,
      }
      state.todoList.push(newTodo);
      state.inputValue = '';
    },
    deleteTodo: (state, action) => {
      const idTodo = action.payload;
      state.todoList = state.todoList.filter(
        (todo) =>  (todo.id !== idTodo)
      );
    },
    toggleTodo: (state, action) => {
      const idTodo = action.payload;
      state.todoList = state.todoList.map(
        (todo) => {
          if(todo.id === idTodo) {
            return(
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

// Action creators are generated for each case reducer function
export const { changeText, addTodo, deleteTodo, toggleTodo } = counterSlice.actions

export default counterSlice.reducer