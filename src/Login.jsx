import { TextField } from "@mui/material";
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

export const Login = () => {
  const [pass, setPass] = useState("");
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
          }}
        />
        <Container>
          <LoginContainer>
            <HeaderText>Enter Password</HeaderText>
            <br />
            <TextField
              sx={{ width: "250px" }}
              color="secondary"
              label="Password"
              type="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <br />
            <LoginButton
              variant="contained"
              disableElevation
              onClick={() => {
                if (pass === atob(process.env.REACT_APP_V)) {
                  localStorage.setItem("v", pass);
                  setTimeout(() => {
                    window.location.reload(false);
                  }, 400);
                } else {
                  toast.error("Wrong Password", {
                    duration: 1300,
                    position: "top-center",
                    style: {
                      padding: "16px",
                      border: `2px solid #672fff;`,
                      borderRadius: "16px",
                      color: "black",
                    },
                  });
                  setPass("");
                }
              }}
            >
              Login
            </LoginButton>
          </LoginContainer>
        </Container>
      </ThemeProvider>
    </>
  );
};
