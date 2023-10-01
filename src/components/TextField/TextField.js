import styles from './TextField.module.css'

function TextField({ textValue, changeText }) {
  return (
    <input type='text' value={textValue} className={styles.textField} onChange={changeText} />
  );
}

export default TextField;
