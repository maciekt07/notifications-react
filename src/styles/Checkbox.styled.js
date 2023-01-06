import styled from "styled-components";
import { themeColors } from "./Variables.styled";
export const Checkbox = styled.input.attrs({
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
  cursor: pointer;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const CheckBoxClick = styled.span`
  cursor: pointer;
`;
export const CheckboxText = styled.label`
  opacity: ${(props) => (props.checked ? 1 : 0.6)};
  border-radius: 4px;
  background: #292f40;
  color: white;
  cursor: pointer;
`;
