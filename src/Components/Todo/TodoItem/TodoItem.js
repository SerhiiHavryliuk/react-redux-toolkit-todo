import React from 'react';
import {Button} from "../../Button/Button";
import styles from './TodoItem.module.css';

export function TodoItem({todo, deleteItem, toggleItem, isCompleted}) {

  return (
    <li className={styles.todoItem}>
      <input type='checkbox' className={styles.checkbox} onChange={toggleItem}/>
      <span
        className={`
        ${styles.title} 
        ${isCompleted ? styles.completedTodo : ''}`}
      >
        {todo.description}
      </span>
      <Button title='delete' runFunction={deleteItem}/>
    </li>
  );
}
