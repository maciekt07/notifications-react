import styled from "styled-components";
import { themeColors } from "./Variables.styled";
export const CheckboxComponent = styled.input.attrs({
  type: "checkbox",
})`
  accent-color: ${themeColors.$colorHex4};
  cursor: pointer;
`;
export const CheckboxContainer = styled.div`
  position: fixed;
  bottom: 50px;
  display: inline-block;
  left: 12px;
  padding: 4px;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const CheckBoxClick = styled.span`
  padding: 4px;
  text-shadow: 0px 0px 20px #292f40;
  cursor: pointer;
`;
export const CheckboxText = styled.label`
  opacity: ${(props) => (props.checked ? 1 : 0.6)};
  border-radius: 4px;

  color: white;
  cursor: pointer;
`;
