import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  //let counter = 5;

  const addValue = () => {
    if (counter < 5) {
      // counter = counter + 1;
      setCounter(counter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  };
  return (
    <>
      <h1>Hook tutorial</h1>
      <h2>Counter val :{counter}</h2>

      <button onClick={addValue}>add val</button>
      <br />
      <br />
      <button onClick={removeValue}>remove val</button>
    </>
  );
}

export default App;
