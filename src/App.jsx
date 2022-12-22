import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import newShade from "./LightenDarkenColor";
import logo from "./logo192.png";
import Push from "push.js";
import Length from "./components/Length";
import Info from "./components/Info";
import LinkComponent from "./styles/Link.styled";
import ButtonComponent from "./styles/Button.styled";
import FooterComponent from "./styles/Footer.styled";
import { HeaderInput, TextInput } from "./styles/Inputs.styled";
import { btn } from "./styles/Variables.styled";
import GlobalStyle from "./styles/Global.styled";

const App = () => {
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
          border: `2px solid ${btn.create}`,
          borderRadius: "16px",
          color: "black",
        },
      });
    });
  };
  return (
    <div className="app">
      <GlobalStyle />
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: btn.create,
              secondary: "white",
            },
          },
        }}
      />
      <HeaderInput
        value={Header}
        onChange={(e) => {
          setHeader(e.target.value);
          localStorage.setItem("Header", e.target.value);
        }}
        placeholder="Header..."
        type="text"
        onFocus={onFocus}
        onBlur={onBlur}
      ></HeaderInput>
      <br />
      <TextInput
        value={Text}
        onChange={(e) => {
          setText(e.target.value);
          localStorage.setItem("Text", e.target.value);
        }}
        placeholder="Text..."
        onFocus={onFocus}
        onBlur={onBlur}
      ></TextInput>
      <Length length={Text.length} />
      <br />
      <br />
      <ButtonComponent
        onClick={createClick}
        background={btn.create}
        lightenBackground={newShade(btn.create, btn.lightenShade)}
      >
        Create
      </ButtonComponent>
      <br />
      <ButtonComponent
        disabled={Text.length === 0 && Header.length === 0}
        onClick={clearClick}
        background={btn.clear}
        lightenBackground={newShade(btn.clear, btn.lightenShade)}
      >
        Clear
      </ButtonComponent>
      <br />
      <ButtonComponent
        visible={localStorage.getItem("Text") !== Text}
        onClick={loadClick}
        background={btn.load}
        lightenBackground={newShade(btn.load, btn.lightenShade)}
      >
        Load
      </ButtonComponent>

      <Info emoji="💡" visible={localStorage.getItem("Text") !== Text}>
        You can <b>load</b> content:{" "}
        <b>
          {localStorage.getItem("Text").slice(0, 16)}
          {localStorage.getItem("Text").length > 16 ? "..." : ""}
        </b>
      </Info>
      {/* <Footer visible={Focus}>
        Made with 💙 By&nbsp;
        <LinkComponent
          clr="#3abdff"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/maciekt07"
        >
          maciekt07
        </LinkComponent>
      </Footer> */}
      <FooterComponent visible={Focus}>
        Made with 💙 By&nbsp;
        <LinkComponent
          clr="#3abdff"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/maciekt07"
        >
          maciekt07
        </LinkComponent>
      </FooterComponent>
    </div>
  );
};

export default App;
