import reactLogo from "./assets/react.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// eslint-disable-next-line no-unused-vars
function App(props) {
  const store = useSelector(state => state);
  const dispatch = useDispatch();
  console.log(999, dispatch);
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is {store.count}</h1>
      <div className="card">
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrease
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increase
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

// eslint-disable-next-line prettier/prettier

// eslint-disable-next-line no-undef
export default App;
