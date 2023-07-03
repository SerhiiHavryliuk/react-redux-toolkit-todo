import '../../../App.css';

import TodoItem from "../TodoItem/TodoItem";

function TodoList({ todoList, deleteTodo, toggleTodo }) {
  return (
    <ol className="todoList">
      {
        todoList.map(
          (todo) => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
        )
      }
    </ol>
  );
}

export default TodoList;