// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState('');

  const changeInputText = (event) =>{
    setInputText(event.target.value)
  }

  const addTodo = () => {
    const newTodoList = [
      ...todoList,
      {
        id: new Date().toString(),
        text: inputText,
        isCompleted: false,
      }
    ];
    setTodoList(newTodoList);
    setInputText('');
  }

  const deleteTodo = (idTodo) => {
    const newTodoList = todoList.filter(
      (todo)=> todo.id !== idTodo
    );
    setTodoList(newTodoList);
  }

  const toggleTodo = (idTodo) => {
    const newTodoList = todoList.map(
      todo => {
        if(todo.id === idTodo) {
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
    setTodoList(newTodoList);
  }


  return (
    <div className="App">
      <div className='todoWrap'>
        <div className='itextFieldWrap'>
          <input type="text" onChange={changeInputText} value={inputText} placeholder='enter new todo'/>
          <button onClick={addTodo}> Add </button>
        </div>

        <ol>
          {
            todoList.map(
              (todo)=>(
                <li key={todo.id}>
                  <input type='checkbox' onChange={()=> toggleTodo(todo.id)}/>
                  <span className={todo.isCompleted? 'todoCompleted':""}>{todo.text}</span>
                  <button onClick={()=> deleteTodo(todo.id)}> delete </button>
                </li>)
            )
          }
        </ol>
      </div>

    </div>
  );
}

export default App;
