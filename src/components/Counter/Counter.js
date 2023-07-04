import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {decrement, increment, changeText, incrementByAmount} from '../../store/todoSlize'

// import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(state => state.counter.value);
  const text = useSelector(state => state.counter.text);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{text}</h2>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(changeText())}
      > change text
      </button>
      <br/> <br/>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(incrementByAmount({test1: 10, test2: 20}))}
      >
        Increment by amount + 20
      </button>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}