import styled from "styled-components";

export const LastUseLabel = styled.div`
  position: absolute;
  bottom: 50px;
  right: 25px;
  font-size: 14px;
  font-weight: lighter;
  color: white;
  z-index: 100;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;
