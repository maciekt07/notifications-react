import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import newShade from "./LightenDarkenColor";
import "./styles/style.css";
import logo from "./logo192.png";
import Push from "push.js";
import Length from "./components/Length";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Info from "./components/Info";

const App = () => {
  const createBtnColor = "#03a688";
  const clearBtnColor = "#ff4640";
  const loadBtnColor = "#FF9D00";
  const clrShade = 26;

  if (localStorage.getItem("Text") == null) {
    localStorage.setItem("Text", "");
    localStorage.setItem("Header", "");
  }
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
    }).then(() => {
      toast.success("Notification Created!", {
        duration: 1800,
        position: "top-center",
        style: {
          padding: "16px",
          border: `2px solid ${createBtnColor}`,
          borderRadius: "20px",
          color: "black",
        },
      });
    });
  };
  return (
    <div className="app">
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: createBtnColor,
              secondary: "white",
            },
          },
        }}
      />
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
      <Button
        onClick={createClick}
        color={createBtnColor}
        lightenColor={newShade(createBtnColor, clrShade)}
      >
        Create
      </Button>
      <br />
      <Button
        disabled={Text.length === 0 && Header.length === 0}
        onClick={clearClick}
        color={clearBtnColor}
        lightenColor={newShade(clearBtnColor, clrShade)}
      >
        Clear
      </Button>
      <br />
      <Button
        visible={localStorage.getItem("Text") !== Text}
        onClick={loadClick}
        color={loadBtnColor}
        lightenColor={newShade(loadBtnColor, clrShade)}
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
        <a target="_blank" rel="noreferrer" href="https://github.com/maciekt07">
          maciekt07
        </a>
      </Footer>
    </div>
  );
};

export default App;
