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
        placeholder="Header..."
        type="text"
      ></input>
      <div
        style={Header.length <= 0 ? { visibility: "hidden" } : {}}
        className="TextLength"
      >
        {Header.length}
      </div>
      <br />
      <textarea
        value={Text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text..."
      ></textarea>
      <div
        style={Text.length <= 0 ? { visibility: "hidden" } : {}}
        className="TextLength"
      >
        {Text.length}
      </div>
      <br />
      <button
        disabled={Text.length == 0 && Header.length == 0}
        onClick={buttonClick}
        className="createBtn"
      >
        Create
      </button>
    </div>
  );
};

export default App;
