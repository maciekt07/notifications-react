import { css } from "styled-components";
import styled from "styled-components";
import { themeColors } from "./Variables.styled";
const Inputs = css`
  font-size: 30px;
  width: 80%;
  border: 5px solid ${themeColors.$colorHex5};
  border-radius: 25px;
  padding: 16px;
  outline: none;
  color: ${themeColors.$colorHex2};
  font-weight: bold;
  background: #f5fffb;
  caret-color: ${themeColors.$colorHex5};
  transition: 0.3s all;
  max-width: 850px;

  &::placeholder {
    color: ${themeColors.$colorHex2};
    opacity: 0.75;
  }

  &::selection {
    background: ${themeColors.$colorHex5};
  }

  &:focus,
  :focus-visible {
    outline: none;
    box-shadow: 0px 0px 20px 2px ${themeColors.$colorHex5};
  }

  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    // box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background: ${themeColors.$colorHex1};
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${themeColors.$colorHex2};
    border-radius: 20px;

    &:hover {
      background-color: ${themeColors.$colorHex2};
    }
  }
`;

/**
Styled input element for the header.
@returns {JSX.Element} - The JSX Element for the styled input component.
@example <HeaderInput placeholder="This is header input"/>
*/
export const HeaderInput = styled.input.attrs({
  type: "text",
})`
  ${Inputs}
`;
/**
Styled text area element for text input.
@param {number} size - The height of the text area in viewport height (vh) units.
@returns {JSX.Element} - The JSX Element for the styled text area component.
@example <TextInput size={18} placeholder="This is text input" />
*/
export const TextInput = styled.textarea`
  ${Inputs}
  resize: none !important;
  height: ${(props) => props.size + "vh"};
  &:focus {
    height: ${(props) => `calc(${props.size}vh + 12vh)`};
  }
`;
