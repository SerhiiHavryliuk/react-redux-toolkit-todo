import React from 'react';
import {TodoItem} from "../TodoItem/TodoItem";
import styles from './TodoLIst.module.css';

export function TodoList({todoList, deleteItem, toggleItem}) {

  return (
    <ol className={styles.todoList}>
      {
        todoList.map(
          (todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteItem={()=>deleteItem(todo.id)}
              toggleItem={()=>toggleItem(todo.id)}
              isCompleted={todo.isCompleted}
              title="text title"/>
          )
        )
      }
    </ol>
  );
}
