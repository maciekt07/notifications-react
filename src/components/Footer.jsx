import { LinkComponent, FooterComponent, FooterEmoji } from "../styles";
import { FaHeart } from "react-icons/fa";
/**
 * Renders a footer component that displays information about the creator.
 * @param {boolean} visible - Whether or not the footer is visible.
 * @param {string} background - The background color of the footer.
 * @param {string} color - The color of the text in the footer.
 * @param {string} linkColor - The color of the link in the footer.
 * @param {string} emoji - The emoji to be displayed in the footer. Default is "💙".
 * @returns {JSX.Element} The JSX Element for the footer component.
 * @example <Footer background="#f1f7fe" color="#333" linkColor="#672fff" emoji="💜" />
 */

export const Footer = ({
  visible,
  background,
  color,
  linkColor,
  emoji = <FaHeart size=".85em" />,
}) => {
  return (
    <FooterComponent visible={visible} background={background} color={color}>
      Made with <FooterEmoji color={linkColor}>{emoji}</FooterEmoji> By&nbsp;
      <LinkComponent
        clr={linkColor}
        rel="noreferrer"
        target="_blank"
        href="https://github.com/maciekt07"
      >
        maciekt07
      </LinkComponent>
    </FooterComponent>
  );
};
