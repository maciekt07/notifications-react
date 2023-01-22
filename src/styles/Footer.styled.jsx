import styled from "styled-components";
export const FooterComponent = styled.footer`
  border-radius: 20px 20px 0 0;
  background: #364573;
  padding: 10px 0;
  position: fixed;
  left: 0;
  /* bottom: ${(props) => (props.visible ? 0 : "-3em")}; */
  bottom: 0;
  z-index: 5;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 18px;
  transition: 0.3s all;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;
FooterComponent.defaultProps = {
  visible: true,
};

export const FooterEmoji = styled.span`
  text-shadow: 0px 0px 2px ${(props) => props.color};
`;
