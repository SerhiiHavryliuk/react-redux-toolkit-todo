// import logo from './logo.svg';
import store from './store'
import {Provider} from 'react-redux'
import './App.css';
import TodoList from "./components/Todo/TodoList";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
