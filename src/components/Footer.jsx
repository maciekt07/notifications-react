import { LinkComponent, FooterComponent, FooterEmoji, themeColors } from "../styles";
/**
Renders a footer component that displays information about the creator.
@param {Object} props - The props object that contains visible and color properties.
@param {boolean} props.visible - Whether the footer component is visible or not.
@param {string} props.color - The color of the footer component.
@returns {JSX.Element} - The JSX Element for the footer component.
@example <Footer visible={true} color="#364573" />
*/
export const Footer = (props) => {
  return (
    <FooterComponent visible={props.visible} color={props.color}>
      Made with <FooterEmoji color={themeColors.$linkColor}>💙</FooterEmoji> By&nbsp;
      <LinkComponent
        clr="#3abdff"
        rel="noreferrer"
        target="_blank"
        href="https://github.com/maciekt07"
      >
        maciekt07
      </LinkComponent>
    </FooterComponent>
  );
};
