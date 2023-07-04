import React from 'react';
import styles from './InputText.module.css';

export function InputText({changeInputText, inputValue}) {

  return (
    <input type='text' className={styles.inputText} value={inputValue} onChange={changeInputText}/>
  );
}
