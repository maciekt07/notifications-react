import styled, { createGlobalStyle } from "styled-components";
import { styled as muistyled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
export const LoginGlobal = createGlobalStyle`
&{
  &::selection {
    background: #6b77ff;
    color: white;
  }
}
body {
  background: hsl(218deg 50% 91%);
  font-family: poppins !important;
  
}
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  @media (max-height: 500px) {
    margin-top: 50px;
    margin-bottom: 50px;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(0%);
  }
`;

export const LoginContainer = styled.div`
  padding: 4.5em 3.5em;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: hsl(213deg 85% 97%);
  border-radius: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const PasswordInput = styled.input.attrs({
  type: "password",
  placeholder: "password",
})`
  width: 250px;
`;

export const HeaderText = styled.h1`
  margin-top: 30px;
  font-weight: bolder;
  color: #333;
  text-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
`;

export const LoginButton = styled.button`
  user-select: none;
  width: 250px;
  padding: 1em;
  background: #672fff;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s all;
  &:hover,
  &:focus-visible {
    /* background: #8060ff; */
    outline: none;
    box-shadow: 0px 0px 40px -2px rgba(102, 47, 255, 0.508);
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  }
  /* &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  } */
`;

export const LoginTextField = muistyled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
  },

  "& .MuiInputLabel-root": {
    fontFamily: "poppins",
  },
  "& .MuiInputBase-input": {
    fontFamily: "poppins",
  },
});
