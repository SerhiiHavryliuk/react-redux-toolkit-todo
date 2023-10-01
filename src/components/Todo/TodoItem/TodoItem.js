import styles from './TodoItem.module.css'
import Button from "../../Button/Button";

function TodoItem({item, deleteItem, toggleItem}) {
  return (
    <div className={styles.todoItem}>
      <input type='checkbox' onChange={() => toggleItem(item.id)}/>
      <span className={item.isCompleted? styles.completed : ''}> {item.description} </span>
      <Button title='delete' runFunction={() => deleteItem(item.id)}/>
    </div>
  );
}

export default TodoItem;
