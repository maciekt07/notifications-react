import styled from "styled-components";

export const BottomLabel = styled.div`
  position: fixed;
  bottom: 50px;
  right: 16px;
  font-size: 12px;
  font-weight: lighter;
  color: white;
  z-index: 100;
  opacity: ${(props) => (props.visible ? 0.7 : 0)};
  border-radius: 4px;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  background: #292f40;
`;
export const Online = styled.span`
  color: #14ff18;
  text-shadow: 0px 0px 6px #14ff18;
`;
export const Offline = styled.span`
  color: #f74545;
  text-shadow: 0px 0px 6px #f74545;
`;
BottomLabel.defaultProps = {
  visible: true,
};
