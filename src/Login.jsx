import {
  FormControlLabel,
  FormGroup,
  Checkbox,
  Link,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import padlock from "./assets/padlock.png";
import { Footer } from "./components";

import {
  Container,
  HeaderText,
  LoginButton,
  LoginGlobal,
  theme,
  LoginContainer,
  LoginTextField,
} from "./styles";
import { hexToRgba } from "./utils";
import { rndChar } from "./utils/rndChar";

/**
 * Login page component
 * @returns {JSX.Element} JSX Element
 */
export const Login = () => {
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <LoginGlobal />
        <Toaster />
        <Container>
          <LoginContainer>
            <img
              style={{
                position: "absolute",
                PointerEvent: "none",
                marginBottom: "500px",
                width: "250px",
                userSelect: "none",
                filter: "drop-shadow(0px 0px 40px #f0be48cc)",
              }}
              onDragStart={(e) => e.preventDefault()}
              src={padlock}
              alt="padlock"
            />
            <HeaderText>Enter Password</HeaderText>
            <br />
            <LoginTextField
              error={error && pass.length > 0}
              helperText={error && pass.length !== 0 && "Wrong Password."}
              sx={{ width: "250px" }}
              color="secondary"
              label="Password"
              type={showPass ? "text" : "password"}
              value={pass}
              onChange={(e) => {
                e.target.value.length === 0 && setError(false);
                setPass(e.target.value);
              }}
            />
            <br />
            <LoginButton
              disabled={pass.length === 0}
              variant="contained"
              disableElevation
              onClick={() => {
                if (pass === atob(process.env.REACT_APP_V)) {
                  localStorage.setItem("v", pass);
                  window.location.reload(false);
                } else {
                  toast.error("Wrong Password", {
                    duration: 2000,
                    position: "top-center",
                    style: {
                      padding: "16px",
                      border: `2px solid #ff443a`,
                      borderRadius: "16px",
                      color: "black",
                      marginTop: "10px",
                      background: "#ffffff91",
                      backdropFilter: "blur(6px)",
                    },
                  });
                  setError(true);
                }
              }}
            >
              Login
            </LoginButton>
            <FormGroup
              sx={{ width: "250px", userSelect: "none", marginTop: "16px" }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary"
                    checked={showPass}
                    onChange={() => setShowPass(!showPass)}
                  />
                }
                label={
                  <Typography
                    sx={{
                      opacity: showPass ? 1 : 0.7,
                      transition: "0.2s all",
                      fontWeight: "400",
                      fontFamily: "poppins",
                    }}
                  >
                    Show Password
                  </Typography>
                }
              />
            </FormGroup>

            <Link
              onClick={() =>
                toast(`x${rndChar("d", 16)}`, {
                  icon: "😂",
                  duration: 1600,
                  style: {
                    padding: "16px",
                    border: `2px solid #672fff`,
                    borderRadius: "16px",
                    color: "black",
                    background: "#ffffff91",
                    backdropFilter: "blur(6px)",
                  },
                })
              }
              sx={{
                width: "250px",
                cursor: "pointer",
                userSelect: "none",
              }}
              color="secondary"
            >
              Forgot Password?
            </Link>
          </LoginContainer>
        </Container>
        <Footer background="#f1f7fe" color="#333" linkColor="#672fff" />
      </ThemeProvider>
    </>
  );
};
