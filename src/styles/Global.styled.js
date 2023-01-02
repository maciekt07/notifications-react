import { createGlobalStyle } from "styled-components";
import { themeColors, btn } from "./Variables.styled";
export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Poppins', sans-serif;
  transition: 0.3s all !important;
  &::selection {
    background: ${themeColors.$selectionColor};
  }
}

:root {
  --toastify-color-success: ${btn.create};
  --toastify-color-error: ${btn.clear};
  --toastify-icon-color-success: var(--toastify-color-success);
  color-scheme: light;
}

.Toastify__toast-container {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body {
  background: ${themeColors.$colorHex3};
  margin: 0;
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
