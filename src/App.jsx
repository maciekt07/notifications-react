import { useState, useEffect, Suspense } from "react";
import { toast, Toaster } from "react-hot-toast";
import logo from "./assets/logo192.png";
import Push from "push.js";
import { useStickyState, useOnlineStatus } from "./hooks";
import { getDate } from "./utils";
import { Footer, Info, Length, Modal } from "./components";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import {
  ButtonComponent,
  HeaderInput,
  TextInput,
  BottomLabel,
  btn,
  GlobalStyle,
  Online,
  Offline,
  SettingsButton,
  theme,
} from "./styles";
import FormLabel from "@mui/material/FormLabel";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  MenuItem,
  Select,
  Slider,
  ThemeProvider,
} from "@mui/material";
import { translationsEn } from "./locales/en";
import { translationsPl } from "./locales/pl";
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";
import gb from "./assets/gb.svg";
import pl from "./assets/pl.svg";
import { Settings } from "@mui/icons-material";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      pl: { translation: translationsPl },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

const langs = [
  {
    value: "en",
    name: "English",
    icon: gb,
  },
  {
    value: "pl",
    name: "Polski",
    icon: pl,
  },
];
function isIOS() {
  if (typeof navigator === "undefined" || typeof window === "undefined")
    return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.userAgent.includes("Macintosh") && "ontouchend" in document)
  );
}
/**
 * Main application component
 * @returns {JSX.Element} JSX Element
 */
const App = () => {
  // Check if Text and Header values exist in local storage, if not set the initial state
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
  const [TextSize, setTextSize] = useStickyState(28, "TextSize");
  const [LogoutDialog, setLogoutDialog] = useState(false);
  const [lang, setLang] = useStickyState(
    navigator.language.split("-")[0] === "pl" ? "pl" : "en",
    "language"
  );
  const [iosSplitEnabled, setIosSplitEnabled] = useStickyState(
    isIOS(),
    "iosSplitEnabled"
  );
  const { t } = useTranslation();

  // Update language using i18n on component mount and when the lang state changes
  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

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
    const fullText = NotificationText();

    let title = Header;
    let body = fullText;

    // If iOS and toggle enabled, split text to get around 670 char limit
    if (isIOS() && iosSplitEnabled) {
      title = fullText.slice(0, 670);
      body = fullText.slice(670, 1340);
    }

    Push.create(title, {
      body: body,
      icon: logo,
      onClick: () => {
        window.open("http://example.com/page");
      },
    }).then(() => {
      SetLastUse(getDate(lang));
      toast.success(t("notification"), {
        duration: 1300,
        position: "top-center",
        style: {
          marginTop: "10px",
          background: "#ffffff91",
          backdropFilter: "blur(6px)",
          padding: "16px",
          border: `2px solid ${btn.create}`,
          borderRadius: "16px",
          color: "black",
        },
      });
    });
  };

  // window.addEventListener("storage", (e) => {
  //   console.log(e);
  //   localStorage.setItem(e.key, e.oldValue);
  // });
  return (
    <Suspense fallback="Loading...">
      <ThemeProvider theme={theme}>
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
          {!iosSplitEnabled && (
            <>
              <HeaderInput
                placeholder={t("header")}
                value={Header}
                onChange={(e) => {
                  setHeader(e.target.value);
                  localStorage.setItem("Header", e.target.value);
                }}
                onFocus={() => setFocus(false)}
                onBlur={() => setFocus(true)}
              ></HeaderInput>
              <br />
            </>
          )}
          <TextInput
            placeholder={t("text")}
            value={Text}
            onChange={(e) => {
              setText(e.target.value);
              localStorage.setItem("Text", e.target.value);
            }}
            size={TextSize}
            onFocus={() => setFocus(false)}
            onBlur={() => setFocus(true)}
          ></TextInput>
          <Length length={Text.length} focus={Focus} />
          <span style={{ padding: "0 0 48px 0" }} />
          <ButtonComponent onClick={createClick} background={btn.create}>
            {t("create")}
          </ButtonComponent>
          <br />
          <ButtonComponent
            disabled={Text.length === 0 && Header.length === 0}
            onClick={() => {
              setText("");
              setHeader("");
            }}
            background={btn.clear}
          >
            {t("clear")}
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
                {t("paste")}
              </ButtonComponent>
            </>
          )}
          {localStorage.getItem("Text") !== Text && (
            <>
              <br />
              <ButtonComponent
                onClick={() => setText(localStorage.getItem("Text"))}
                background={btn.load}
              >
                {t("load")}
              </ButtonComponent>
              <br />
              <Info emoji="💡">
                <Trans components={{ bold: <b /> }}>{t("loadInfo")}</Trans>{" "}
                <b>
                  {localStorage.getItem("Text").slice(0, 16)}
                  {localStorage.getItem("Text").length > 16 ? "..." : ""}
                </b>
              </Info>
            </>
          )}
          <span style={{ padding: "0 0 10vh 0" }}></span>
          <BottomLabel visible={Focus && !HideFooter}>
            {useOnlineStatus() ? <Online /> : <Offline />}{" "}
            {LastUse !== null &&
              `· ${t("lastUse")}
        ${LastUse}`}
          </BottomLabel>
          <SettingsButton
            onClick={() => setModal((m) => !m)}
            footer={HideFooter}
            visible={Focus}
          >
            {/* {t("settingsHeader")} */}
            <Settings />
          </SettingsButton>
          <Modal
            show={modal}
            title={t("settingsHeader")}
            close={() => setModal(false)}
          >
            <>
              <FormGroup>
                <FormLabel>{t("lang")}</FormLabel>
                <br />

                <Select
                  style={{
                    borderRadius: 12,
                  }}
                  defaultValue="en"
                  value={lang}
                  onChange={(e) => {
                    setLang(e.target.value);
                  }}
                >
                  {langs.map((lang, index) => (
                    <MenuItem
                      style={{
                        padding: 12,
                        margin: 12,
                        borderRadius: 12,
                      }}
                      key={index}
                      value={lang.value}
                    >
                      <img
                        src={lang.icon}
                        alt={lang.value}
                        style={{
                          height: "12px",
                          borderRadius: "2px",
                        }}
                      />{" "}
                      &nbsp; {lang.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormGroup>
              <br />
              <FormGroup>
                <FormLabel>{t("textSettings")}</FormLabel>
                <FormControlLabel
                  sx={Uppercase ? { opacity: 0.9 } : { opacity: 0.5 }}
                  control={
                    <Switch
                      checked={Uppercase}
                      onClick={() => setUppercase((u) => !u)}
                    />
                  }
                  label={t("uppercase")}
                />
                <FormControlLabel
                  sx={Compress ? { opacity: 0.9 } : { opacity: 0.5 }}
                  control={
                    <Switch
                      checked={Compress}
                      onChange={() => setCompress((c) => !c)}
                    />
                  }
                  label={t("compress")}
                />
              </FormGroup>
              <br />
              {isIOS() && (
                <>
                  <FormGroup>
                    <FormLabel>iOS</FormLabel>
                    <FormControlLabel
                      sx={iosSplitEnabled ? { opacity: 0.9 } : { opacity: 0.5 }}
                      control={
                        <Switch
                          checked={iosSplitEnabled}
                          onClick={() => setIosSplitEnabled((u) => !u)}
                        />
                      }
                      label={"iOS Split"}
                    />
                  </FormGroup>
                  <br />
                </>
              )}
              <FormGroup>
                <FormLabel>{t("layoutSettings")}</FormLabel>
                <FormControlLabel
                  sx={HidePasteBtn ? { opacity: 0.9 } : { opacity: 0.6 }}
                  control={
                    <Switch
                      checked={HidePasteBtn}
                      onClick={() => SetHidePasteBtn((h) => !h)}
                    />
                  }
                  label={t("pasteBtn")}
                />
                <FormControlLabel
                  sx={HideFooter ? { opacity: 0.9 } : { opacity: 0.6 }}
                  control={
                    <Switch
                      checked={HideFooter}
                      onChange={() => SetHideFooter((h) => !h)}
                    />
                  }
                  label={t("footer")}
                />
              </FormGroup>
              <br />
              <FormLabel>{t("txtArea")}</FormLabel>
              <br />
              <FormGroup>
                <Slider
                  sx={{ width: "200px" }}
                  min={20}
                  step={1}
                  max={35}
                  value={TextSize}
                  valueLabelDisplay="auto"
                  valueLabelFormat={TextSize + "vh"}
                  onChange={(e) => setTextSize(e.target.value)}
                />
                <br />
              </FormGroup>
            </>
          </Modal>
          <Dialog
            PaperProps={{
              style: {
                borderRadius: 18,
                padding: 4,
              },
            }}
            open={LogoutDialog}
            onClose={() => setLogoutDialog(false)}
          >
            <DialogTitle>{t("LogoutDialogTitle")}</DialogTitle>
            <DialogActions>
              <Button
                style={{ fontSize: ".9rem", borderRadius: 12 }}
                onClick={() => setLogoutDialog(false)}
              >
                {t("no")}
              </Button>
              <Button
                style={{ fontSize: ".9rem", borderRadius: 12 }}
                onClick={() => {
                  localStorage.setItem("v", null);
                  window.location.reload(false);
                }}
              >
                {t("yes")}
              </Button>
            </DialogActions>
          </Dialog>
          <Footer visible={Focus && !HideFooter} />
        </div>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
