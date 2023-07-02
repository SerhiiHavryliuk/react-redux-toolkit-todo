// import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    const [newTodo, setNewTodo] = useState('')
    const [todoList, setTodoList] = useState([])

    const setValueForNewTodo = (event) => {
        setNewTodo(event.target.value);
        console.log(newTodo)
    }
    const addNewTodo = () => {
        if (newTodo.trim().length) {
            setTodoList([
                ...todoList,
                {
                    id: new Date().toISOString(),
                    text: newTodo,
                    isComplete: false,
                }
            ])
        }
        setNewTodo('');
    }
    const deleteTodo = (idTodo) => {
        console.log(idTodo);
        const newTodo = todoList.filter((todo)=> todo.id !== idTodo)
        setTodoList(newTodo);
    }

    const toggleTodIsComplete = (idTodo) => {
        const newTodoList = todoList.map(
            todo => {
            if(todo.id !== idTodo) return todo;
            return {
                ...todo,
                isComplete: !todo.isComplete, // заміна властивості
            }
        })

        setTodoList(newTodoList);
    }

    return (
        <div className="App">
            <div className='formApp'>
                <div className="textFieldWrap">
                    <input className='textField'
                           type='text'
                           value={newTodo}
                           placeholder='enter new todo'
                           onChange={setValueForNewTodo}/>
                    <button className='buttonAdd' onClick={addNewTodo}> add</button>
                </div>

                <ol className='todosListWrap'>
                    {
                        todoList.map((todo) =>
                            <li key={todo.id}>
                                <input type='checkbox' checked={todo.isComplete} onChange={()=> toggleTodIsComplete(todo.id)}/>
                                <span className={`todoItem ${todo.isComplete? 'completedTodo': ''}`}> {todo.text}</span>
                                <input type='submit' value='delete' onClick={() => deleteTodo(todo.id)}/>
                            </li>
                        )
                    }
                </ol>

            </div>
        </div>
    );
}

export default App;
