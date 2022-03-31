
import React, { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import "./App.css";

function App() {
  let [name] = useState("Marc");
  let [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);

  return (
    <div>
      <h1>State testing</h1>
      <Header subtitle="Amazing app" />
      <h3>HEY! {name} how are you?</h3>
      <hr />
      <h1>Counter value: {counter} </h1>
      <Button action={increase} operator="+" />
      <Button action={decrease} operator="-" />
      
      {/* <button onClick={increment}>+</button>
      <button onClick={decrease}>-</button> */}
    </div>
  );
}

export default App;
