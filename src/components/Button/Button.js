import styles from './Button.module.css'

function Button({title, runFunction}) {
  return (
    <button className={styles.button} onClick={runFunction}>
      {title}
    </button>
  );
}

export default Button;
