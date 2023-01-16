import styled from "styled-components";
import { themeColors } from "./Variables.styled";
export const CheckboxComponent = styled.input.attrs({
  type: "checkbox",
})`
  accent-color: ${themeColors.$colorHex4};
  cursor: pointer;
`;
export const CheckboxContainer = styled.div`
  display: inline-block;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
CheckboxContainer.defaultProps = {
  visible: true,
};
export const CheckBoxClick = styled.span`
  padding: 4px;

  cursor: pointer;
`;
export const CheckboxText = styled.label`
  opacity: ${(props) => (props.checked ? 1 : 0.6)};
  border-radius: 4px;
  color: black;
  cursor: pointer;
`;
