import { useState } from "react";
import "./styles/style.css";
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
        disabled={Text.length == 0 && Header.length == 0}
        onClick={createClick}
        className="createBtn"
      >
        Create
      </button>
      <br />
      <button
        disabled={Text.length == 0 && Header.length == 0}
        className="clearBtn"
        onClick={clearClick}
      >
        Clear
      </button>
    </div>
  );
};

export default App;
