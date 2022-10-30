import { useState } from "react";
import "./styles/style.css";
import Push from "push.js";
const App = () => {
  const [Header, setHeader] = useState("");
  const [Text, setText] = useState("");
  const buttonClick = () => {
    Push.create(Header, {
      body: Text,
    });
  };
  return (
    <div className="app">
      <input
        value={Header}
        onChange={(e) => setHeader(e.target.value)}
        placeholder="Header"
        type="text"
      ></input>
      <textarea
        value={Text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text"
      ></textarea>
      <button onClick={buttonClick}>Create</button>
    </div>
  );
};

export default App;
