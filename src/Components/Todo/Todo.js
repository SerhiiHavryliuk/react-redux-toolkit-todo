import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {Button} from "../Button/Button";
import {InputText} from "../InputText/InputText";
import {TodoList} from "./TodoLIst/TodoLIst";
import { changeText, addTodo, deleteTodo, toggleTodo } from '../../store/todoSlice'
import styles from './Todo.module.css';

export function Todo() {
  const dispatch = useDispatch()
  const inputText = useSelector(state => state.todo.inputValue)
  const musicTodoList = useSelector(state => state.todo.todoList)

  const changeInputText = (event) => {
    dispatch(changeText(event.target.value));
  }

  const addTodoItem = () => {
    dispatch(addTodo());
  }

  const deleteTodoItem = (idTodo) => {
    dispatch(deleteTodo(idTodo));
  }

  const toggleTodoItem = (idTodo) => {
    dispatch(toggleTodo(idTodo));
  }

  return (
    <div className={styles.todo}>
      <h2>TodoList App</h2>
      <header>
        <InputText inputValue={inputText} changeInputText={changeInputText}/>
        <Button title='add' runFunction={addTodoItem} />
      </header>
      <p>{inputText}</p>
      <TodoList todoList={musicTodoList} deleteItem={deleteTodoItem} toggleItem={toggleTodoItem}/>
    </div>
  );
}
