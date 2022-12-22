import { createGlobalStyle } from "styled-components";
import { themeColors } from "./Variables.styled";
const GlobalStyle = createGlobalStyle`
* {
  font-family: poppins;
  transition: 0.3s all !important;
  &::selection {
    background: ${themeColors.$selectionColor};
  }
}

:root {
  --toastify-color-success: #03a688;
  --toastify-icon-color-success: var(--toastify-color-success);
}

.Toastify__toast-container {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body {
  background: ${themeColors.$colorHex3};
  margin: 0;
  color-scheme: light;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
}

br {
  content: "";
  margin: 2em;
  display: block;
  font-size: 25%;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
img {
  border-radius: 20px;
}
`;
export default GlobalStyle;
