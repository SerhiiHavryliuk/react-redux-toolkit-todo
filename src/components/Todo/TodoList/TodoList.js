import styles from './TodoList.module.css'
import TodoItem from "../TodoItem/TodoItem";
import {deleteTodo, toggleTodo} from "../../../store/todoSlice";
import {useDispatch} from "react-redux";

function TodoList({list}) {
  const dispatch = useDispatch();

  return (
    <ol className={styles.todoList}>
      {
        list.map(
          (todo) => <TodoItem
            key={todo.id}
            item={todo}
            deleteItem={(todoId)=>dispatch(deleteTodo(todoId))}
            toggleItem={(todoId)=>dispatch(toggleTodo(todoId))}/>
        )
      }
    </ol>
  );
}

export default TodoList;
