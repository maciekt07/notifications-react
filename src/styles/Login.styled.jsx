import styled, { createGlobalStyle } from "styled-components";
import { themeColors } from "./Variables.styled";

export const LoginGlobal = createGlobalStyle`
body {
  background: hsl(218deg 50% 91%);
  font-family: poppins;
}
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const LoginContainer = styled.div`
  padding: 4.5em 3.5em;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: hsl(213deg 85% 97%);
  border-radius: 30px;
`;

export const PasswordInput = styled.input.attrs({
  type: "password",
  placeholder: "password",
})`
  width: 250px;
`;

export const HeaderText = styled.h1`
  opacity: 0.8;
`;

export const LoginButton = styled.button`
  width: 250px;
  padding: 1em;
  background: #672fff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    background: #8153ff;
  }
`;