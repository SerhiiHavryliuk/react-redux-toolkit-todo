import '../../App.css';
import TextField from "../TextField/TextField";
import Button from "../Button/Button";
import TodoList from "./TodoList/TodoList";
import {useState} from "react";

function Todo() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const changeInputText = (event) => {
    setInputText(event.target.value);
  }

  const addTodo = () => {
    const newTodoList = [
      ...todoList,
      {
        id: new Date().toString(),
        description: inputText,
        isCompleted: false,
      }
    ]
    setTodoList(newTodoList);
    setInputText('')
  }

  const deleteTodo = (idTodo) => {
    const newTodoList = todoList.filter(
      (todo) => (todo.id !== idTodo)
    )
    setTodoList(newTodoList);
  }

  const toggleTodo = (idTodo) => {
    const newTodoList = todoList.map(
      (todo) => {
        if(todo.id === idTodo){
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
    setTodoList(newTodoList);
  }

  return (
    <div className="todo">
      <h3 className='todoTitle'> Todos List </h3>

      <header>
        <TextField type='text' inputValue={inputText} changeInputText={changeInputText} />
        <Button title="add" runFunction={addTodo} />
      </header>

      <main>
        <TodoList todoList={todoList} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
      </main>
    </div>
  );
}

export default Todo;