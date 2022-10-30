import { useState } from "react";
import "./styles/style.css";
import logo from "./logo192.png";
import Push from "push.js";
import Length from "./components/Length";
const App = () => {
  const [Header, setHeader] = useState("");
  const [Text, setText] = useState("");
  const clearClick = () => {
    setText("");
    setHeader("");
  };
  const createClick = () => {
    Push.create(Header, {
      body: Text,
      icon: logo,
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
      <Length input={Header} />
      <br />
      <textarea
        value={Text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text..."
      ></textarea>
      <Length input={Text} />
      <br />
      <button
        disabled={Text.length === 0 && Header.length === 0}
        onClick={createClick}
        className="createBtn"
      >
        Create
      </button>
      <br />
      <button
        disabled={Text.length === 0 && Header.length === 0}
        onClick={clearClick}
        className="clearBtn"
      >
        Clear
      </button>
    </div>
  );
};

export default App;
