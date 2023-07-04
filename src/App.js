// import logo from './logo.svg';
import './App.css';
import store from './store'
import {Provider} from 'react-redux'
import {Todo} from "./Components/Todo/Todo";
// import {Counter} from "./Components/Counter/Counter";
// import {CounterSecond} from "./Components/CounterSecond/CounterSecond";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/*<Counter/>*/}
        {/*<CounterSecond/>*/}
        <Todo/>
      </div>
    </Provider>
  );
}

export default App;
