// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [textInput, setTextInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const setInputText = (event) => {
    setTextInput(event.target.value);
  }

  const addNewTodo = () => {
    const newTodoList = [
      ...todoList,
      {
        id: new Date().toString(),
        text: textInput,
        isComplete: false,
      }
    ]
    setTodoList(newTodoList);
    setTextInput('')
  }

  const deleteTodo = (idTodo) => {
    const newTodoList = todoList.filter(
      (todo)=> todo.id !== idTodo
    )
    setTodoList(newTodoList);
  }

  const toggleTodoComplete = (idTodo) =>{
    const newTodoList = todoList.map(
      (todo)=>{
        if(todo.id !== idTodo) return todo;

          return{
          ...todo,
            isComplete: !todo.isComplete
          }
      }
    )
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <div className='todoWrap'>
        <div className='inputTextWrap'>
          <input type='text' className='inputText' value={textInput} onChange={setInputText}/>
          <button className='btnAddNewTodo' onClick={addNewTodo}>Add</button>

          <ol>
            {
              todoList.map((todo) => (
                <li key={todo.id}>
                  <input type='checkbox' onChange={()=>toggleTodoComplete(todo.id)}/>
                  <span className={`todoItem ${todo.isComplete?'complete': ''}`}>{todo.text}</span>
                  <input type='button' value='delete' onClick={() => deleteTodo(todo.id)}/>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
