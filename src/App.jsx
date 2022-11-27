import { useState } from "react";
import "./styles/style.css";
import logo from "./logo192.png";
import Push from "push.js";
import Length from "./components/Length";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Info from "./components/Info";

if (localStorage.getItem("Text") == null) {
  localStorage.setItem("Text", "");
  localStorage.setItem("Header", "");
}

const App = () => {
  const [Header, setHeader] = useState("");
  const [Text, setText] = useState("");
  const [Focus, setFocus] = useState(true);

  const onFocus = () => setFocus(false);
  const onBlur = () => setFocus(true);

  const loadClick = () => {
    setText(localStorage.getItem("Text"));
    // setHeader(localStorage.getItem("Header"));
  };
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
        onChange={(e) => {
          setHeader(e.target.value);
          localStorage.setItem("Header", e.target.value);
        }}
        placeholder="Header..."
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
      ></input>
      {/* <Length input={Header} /> */}
      <br />
      <textarea
        value={Text}
        onChange={(e) => {
          setText(e.target.value);
          localStorage.setItem("Text", e.target.value);
        }}
        placeholder="Text..."
        onFocus={onFocus}
        onBlur={onBlur}
      ></textarea>
      <Length length={Text.length} />
      <br />
      <br />
      <Button onClick={createClick} color="#03a688">
        Create
      </Button>
      <br />
      <Button
        disabled={Text.length === 0 && Header.length === 0}
        onClick={clearClick}
        color="#ff4640"
      >
        Clear
      </Button>
      <br />
      <Button
        visible={localStorage.getItem("Text") !== Text}
        onClick={loadClick}
        color="#FF9D00"
      >
        Load
      </Button>

      <Info emoji="💡" visible={localStorage.getItem("Text") !== Text}>
        You can <b>load</b> content:{" "}
        <b>
          {localStorage.getItem("Text").slice(0, 16)}
          {localStorage.getItem("Text").length > 16 ? "..." : ""}
        </b>
      </Info>
      <Footer visible={Focus}>
        Made with 💙 By&nbsp;
        <a target="_blank" href="https://github.com/maciekt07">
          maciekt07
        </a>
      </Footer>
    </div>
  );
};

export default App;
