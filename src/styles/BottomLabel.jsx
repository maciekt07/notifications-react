import styled from "styled-components";
/**
 * Styled component for a bottom label.
 * @param {boolean} visible - Determines the visibility of the label.
 * @example <BottomLabel visible={true}>This is bottom label</BottomLabel>
 */
export const BottomLabel = styled.div`
  transition: 0.3s all;
  position: fixed;
  bottom: 57px;
  right: 16px;
  font-size: 12px;
  font-weight: lighter;

  color: white;
  z-index: 1;
  opacity: ${(props) => (props.visible ? 0.7 : 0)};
  border-radius: 4px;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  background: #292f40;
`;
export const Online = styled.span`
  color: #14ff18;
  text-shadow: 0px 0px 6px #14ff18;
  font-weight: 400;
`;
export const Offline = styled.span`
  color: #f74545;
  text-shadow: 0px 0px 6px #f74545;
  font-weight: 400;
`;
Online.defaultProps = {
  children: "Online",
};
Offline.defaultProps = {
  children: "Offline",
};
BottomLabel.defaultProps = {
  visible: true,
};
