import { createGlobalStyle } from "styled-components";
import { themeColors, btn } from "./Variables.styled";
export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Poppins', sans-serif !important;

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
  touch-action: manipulation;
  transition: 0s all;
  margin-top: 25px;
  .MuiSlider-valueLabel {
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  padding: 6px 14px;
  color: #000000c8;
  background: hsl(213deg 85% 97%);
  /* &::after, &::before {
    display: none;
  } */
}
.MuiPaper-elevation8 {
  margin-top: 6px;
  border-radius: 12px;
  background: #ffffffa0;
  backdrop-filter: blur(6px);
  
}
}


.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
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
`;
