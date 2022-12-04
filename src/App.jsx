import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import newShade from "./LightenDarkenColor";
import "./styles/scss/style.scss";
import logo from "./logo192.png";
import Push from "push.js";
import Length from "./components/Length";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Info from "./components/Info";
import { LinkComponent } from "./styles/Link.styled";

const App = () => {
  const createBtnBackground = "#03a688";
  const clearBtnBackground = "#ff4640";
  const loadBtnBackground = "#FF9D00";
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
        duration: 1300,
        position: "top-center",
        style: {
          padding: "16px",
          border: `2px solid ${createBtnBackground}`,
          borderRadius: "16px",
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
              primary: createBtnBackground,
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
        background={createBtnBackground}
        lightenBackground={newShade(createBtnBackground, clrShade)}
      >
        Create
      </Button>
      <br />
      <Button
        disabled={Text.length === 0 && Header.length === 0}
        onClick={clearClick}
        background={clearBtnBackground}
        lightenBackground={newShade(clearBtnBackground, clrShade)}
      >
        Clear
      </Button>
      <br />
      <Button
        visible={localStorage.getItem("Text") !== Text}
        onClick={loadClick}
        background={loadBtnBackground}
        lightenBackground={newShade(loadBtnBackground, clrShade)}
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
        <LinkComponent
          clr="#3abdff"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/maciekt07"
        >
          maciekt07
        </LinkComponent>
      </Footer>
    </div>
  );
};

export default App;
