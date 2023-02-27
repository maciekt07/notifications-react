import { LinkComponent, FooterComponent, FooterEmoji, themeColors } from "../styles";

/**
 * Renders a footer component that displays information about the creator.
 * @param {boolean} visible - Whether or not the footer is visible.
 * @param {string} color - The color of the footer.
 * @returns {JSX.Element} The JSX Element for the footer component.
 * @example <Footer visible={true} color="#364573" />
 */

export const Footer = ({ visible, color }) => {
  return (
    <FooterComponent visible={visible} color={color}>
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
