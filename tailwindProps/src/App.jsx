import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-gray-300 rounded-xl mb-4">Hello world!</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
    </>
  );
}

export default App;
