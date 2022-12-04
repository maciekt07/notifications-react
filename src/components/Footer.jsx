import styled from "styled-components";

const FooterComponent = styled.footer`
  border-radius: 20px 20px 0 0;
  background: #364573;
  padding: 10px 0;
  position: fixed;
  left: 0;
  bottom: ${(props) => (props.visible ? 0 : "-3em")};
  width: 100%;
  color: white;
  text-align: center;
  font-size: 18px;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const Footer = (props) => {
  return (
    <FooterComponent visible={props.visible}>{props.children}</FooterComponent>
  );
};

Footer.defaultProps = {
  visible: true,
};

export default Footer;
