import React from 'react';
import styles from './Button.module.css';

export function Button({title, runFunction}) {

  return (
    <button className={styles.button} onClick={runFunction}>
      {title}
    </button>
  );
}
