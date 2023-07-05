import styles from './Todo.module.css'
import Button from "../Button/Button";
import {useSelector, useDispatch} from 'react-redux'
import {changeTextField, addTodo} from '../../store/todoSlice'
import TextField from "../TextField/TextField";
import TodoList from "./TodoList/TodoList";

function Todo() {
  const dispatch = useDispatch();
  const textValue = useSelector(state => state.todo.textFieldValue);
  const todoList = useSelector(state => state.todo.todoList);

  return (
    <div className={styles.todo}>
      <h2> TodoList </h2>
      <header>
        <TextField textValue={textValue} changeText={(event) => dispatch(changeTextField(event.target.value))}/>

        <Button title='add' runFunction={() => dispatch(addTodo())}/>
      </header>
      <p>{textValue}</p>

      <TodoList list={todoList}/>
    </div>
  );
}

export default Todo;
