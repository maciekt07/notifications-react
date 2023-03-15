import styled from "styled-components";
import { themeColors, btn } from "./Variables.styled";
import { newShade } from "../utils";
/**
 * A styled button component.
 * @param {string} background - The background color of the button.
 * @returns {JSX.Element} - A styled button component.
 * @example <ButtonComponent background="#03a688">This is button</ButtonComponent>
 */
export const ButtonComponent = styled.button.attrs({
  type: "button",
})`
  user-select: none;
  transition: 0.3s all;
  border-radius: 22px;
  color: white;
  border: none;
  padding: 0.6em 1.2em;
  min-width: 150px;
  width: auto;
  font-size: 1.5em;
  font-weight: 500;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: 0.3s all;
  /* display: ${(props) => (props.visible ? "block" : "none")}; */
  background: linear-gradient(
    261.62deg,
    ${(props) => props.background} 13.66%,
    ${(props) => newShade(props.background, btn.lightenShade)} 88.71%
  );

  &:hover,
  &:focus-visible {
    outline: none;
    text-shadow: 0px 2px 9px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 20px 2px ${(props) => props.background};
  }
  /* &:focus-visible {
    outline: 3px solid ${(props) => props.background};
    box-shadow: 0px 0px 20px 2px
      ${(props) => newShade(props.background, btn.lightenShade)};
  } */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      text-shadow: none;
      box-shadow: none;
    }
  }
`;

ButtonComponent.defaultProps = {
  background: themeColors.$colorHex1,
};

/**
 * A styled settings button component.
 * @param {boolean} visible - Indicates whether the settings button is visible or not.
 * @param {boolean} footer - Indicates whether the footer is visible.
 * @returns {JSX.Element} - A styled settings button component.
 * @example <SettingsButton visible={true} footer={false} >This is settings button</SettingsButton>
 */

export const SettingsButton = styled.button`
  user-select: none;
  transition: 0.3s all;
  position: fixed;
  bottom: ${(props) => (props.footer ? "16px" : "60px")};
  left: 16px;
  outline: none;
  padding: 10px 14px;
  border-radius: 100px;
  background-color: #4f6691;
  cursor: pointer;
  color: white;
  border: 2px solid transparent;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  z-index: 3;
  &:hover,
  &:focus-visible {
    outline: none;
    box-shadow: 0px 0px 15px 0px #4f6691;
    text-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  }
  /* &:hover {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  } */
`;
