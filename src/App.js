// import logo from './logo.svg';
import './App.css';
import Todo from "./components/Todo/Todo";
import store from './store'
import { Provider } from 'react-redux'
import {Counter} from "./components/Counter/Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo></Todo>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
