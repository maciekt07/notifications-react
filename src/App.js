import { useState } from "react";
import "./styles/style.css";
import logo from "./logo192.png";
import Push from "push.js";
import Length from "./components/Length";
import Footer from "./components/Footer";
const App = () => {
  const [Header, setHeader] = useState("");
  const [Text, setText] = useState("");

  const [Focus, setFocus] = useState(true);
  const onFocus = () => setFocus(false);
  const onBlur = () => setFocus(true);

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
        onFocus={onFocus}
        onBlur={onBlur}
      ></input>
      <Length input={Header} />
      <br />
      <textarea
        value={Text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text..."
        onFocus={onFocus}
        onBlur={onBlur}
      ></textarea>
      <Length input={Text} />
      <br />
      <button onClick={createClick} className="createBtn">
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
      <Footer show={Focus} />
    </div>
  );
};

export default App;
