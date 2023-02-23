import {
  FormControlLabel,
  FormGroup,
  TextField,
  Checkbox,
  Link,
} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

import {
  Container,
  HeaderText,
  LoginButton,
  LoginGlobal,
  theme,
  LoginContainer,
} from "./styles";
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
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: "#672fff",
                secondary: "white",
              },
            },
            error: {
              iconTheme: {
                primary: "#ff443a",
                secondary: "white",
              },
            },
          }}
        />
        <Container>
          <LoginContainer>
            <HeaderText>Enter Password</HeaderText>
            <br />
            <TextField
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
                label="Show Password"
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
                  },
                })
              }
              sx={{ width: "250px", cursor: "pointer", userSelect: "none" }}
              color="secondary"
            >
              Forgot Password?
            </Link>
          </LoginContainer>
        </Container>
      </ThemeProvider>
    </>
  );
};
