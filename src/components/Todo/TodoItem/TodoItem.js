import '../../../App.css';

function TodoItem({todo, deleteTodo, toggleTodo}) {
  console.log(todo.isCompleted)
  return (
    <li className="todoItem">
      <input type="checkbox" onChange={() => toggleTodo(todo.id)}/>
      <span className={`
        todoItemDescr 
        ${todo.isCompleted ? 'todoCompleted' : ''}
      `}>
          {todo.description}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>delete</button>
    </li>
  );
}

export default TodoItem;