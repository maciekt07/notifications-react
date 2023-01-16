import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import logo from "./assets/logo192.png";
import Push from "push.js";
import { useStickyState, useOnlineStatus } from "./hooks";
import { getDate } from "./utils";
import { Checkbox, Footer, Info, Length, Modal } from "./components";
import {
  ButtonComponent,
  HeaderInput,
  TextInput,
  BottomLabel,
  btn,
  GlobalStyle,
  Online,
  Offline,
  CheckboxContainer,
  SettingsButton,
} from "./styles";

const App = () => {
  if (localStorage.getItem("Text") == null) {
    localStorage.setItem("Text", "");
    localStorage.setItem("Header", "");
  }
  const [Header, setHeader] = useState("");
  const [Text, setText] = useState("");
  const [Focus, setFocus] = useState(true);
  const [LastUse, SetLastUse] = useStickyState(null, "LastUse");
  const [Compress, setCompress] = useStickyState(false, "Compress");
  const [Uppercase, setUppercase] = useStickyState(false, "Uppercase");
  const [Paste, setPaste] = useState(null);
  const [HidePasteBtn, SetHidePasteBtn] = useStickyState(true, "HidePasteBtn");
  const [HideFooter, SetHideFooter] = useStickyState(false, "HideFooter");
  const [modal, setModal] = useState(false);

  const loadClick = () => {
    setText(localStorage.getItem("Text"));
    // setHeader(localStorage.getItem("Header"));
  };
  const clearClick = () => {
    setText("");
    setHeader("");
  };
  const handleChangeCompress = () => {
    setCompress(!Compress);
  };
  const handleChangeUppercase = () => {
    setUppercase(!Uppercase);
  };

  const NotificationText = () => {
    let txt = Text;
    if (Uppercase) {
      txt = txt.toUpperCase();
    }
    if (Compress) {
      txt = txt.replace(/(?:\r\n|\r|\n)/g, " ").replace(/\s+/g, " ");
    }
    return txt;
  };
  const createClick = () => {
    SetLastUse(getDate());
    Push.create(Header, {
      body: NotificationText(),
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
        onFocus={() => setFocus(false)}
        onBlur={() => setFocus(true)}
      ></HeaderInput>
      <br />
      <TextInput
        value={Text}
        onChange={(e) => {
          setText(e.target.value);
          localStorage.setItem("Text", e.target.value);
        }}
        onFocus={() => setFocus(false)}
        onBlur={() => setFocus(true)}
      ></TextInput>
      <Length length={Text.length} focus={Focus} />
      <br />
      <br />

      <ButtonComponent onClick={createClick} background={btn.create}>
        Create
      </ButtonComponent>
      <br />
      <ButtonComponent
        disabled={Text.length === 0 && Header.length === 0}
        onClick={clearClick}
        background={btn.clear}
      >
        Clear
      </ButtonComponent>

      {!HidePasteBtn && (
        <>
          <br />
          <ButtonComponent
            onClick={async () => {
              const read = await navigator.clipboard.readText();
              setText(read);
              setPaste(read);
            }}
            background="#8981fe"
            disabled={Paste === Text}
          >
            Paste
          </ButtonComponent>
        </>
      )}

      {localStorage.getItem("Text") !== Text && (
        <>
          <br />
          <ButtonComponent onClick={loadClick} background={btn.load}>
            Load
          </ButtonComponent>{" "}
          <Info emoji="💡">
            You can <b>load</b> content:{" "}
            <b>
              {localStorage.getItem("Text").slice(0, 16)}
              {localStorage.getItem("Text").length > 16 ? "..." : ""}
            </b>
          </Info>
        </>
      )}

      <BottomLabel visible={Focus && !HideFooter}>
        {useOnlineStatus() ? <Online /> : <Offline />}{" "}
        {LastUse !== null &&
          `· Last use:
        ${LastUse}`}
      </BottomLabel>
      <SettingsButton
        onClick={() => setModal(true)}
        footer={HideFooter}
        visible={Focus}
      >
        ⚙️ Settings
      </SettingsButton>
      <Modal
        show={modal}
        content={{
          title: "⚙️ Settings",
          text: (
            <>
              <h3>Text Settings</h3>
              <CheckboxContainer>
                <Checkbox check={Uppercase} click={handleChangeUppercase}>
                  Uppercase
                </Checkbox>
                <br />
                <Checkbox check={Compress} click={handleChangeCompress}>
                  Compress
                </Checkbox>
              </CheckboxContainer>
              <h3>Layout Settings</h3>
              <CheckboxContainer>
                <Checkbox
                  check={HidePasteBtn}
                  click={() => SetHidePasteBtn(!HidePasteBtn)}
                >
                  Hide Paste Button
                </Checkbox>
                <br />
                <Checkbox
                  check={HideFooter}
                  click={() => SetHideFooter(!HideFooter)}
                >
                  Hide Footer
                </Checkbox>
              </CheckboxContainer>
            </>
          ),
        }}
        close={() => setModal(false)}
      ></Modal>
      <Footer visible={Focus && !HideFooter} />
    </div>
  );
};

export default App;
