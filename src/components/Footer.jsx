import { LinkComponent, FooterComponent, FooterEmoji, themeColors } from "../styles";
export const Footer = (props) => {
  return (
    <FooterComponent visible={props.visible}>
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
