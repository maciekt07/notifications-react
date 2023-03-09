import styled from "styled-components";
import { hexToRgba } from "../utils";

/**
 * A styled footer component.
 * @param {string} color - The background color of the component.
 * @param {boolean} visible - Whether the component is visible or not.
 */
export const FooterComponent = styled.footer`
  border-radius: 20px 20px 0 0;
  /* box-shadow: 0px -3px 12px ${(props) => hexToRgba(props.background, 0.6)}; */
  background: ${(props) => hexToRgba(props.background, 0.7)};
  backdrop-filter: blur(6px);
  padding: 10px 0;
  position: fixed;
  left: 0;
  /* bottom: ${(props) => (props.visible ? 0 : "-3em")}; */
  bottom: 0;
  z-index: 5;
  width: 100%;
  color: ${(props) => props.color};
  text-align: center;
  font-size: 18px;
  transition: 0.3s all;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;
FooterComponent.defaultProps = {
  visible: true,
  background: "#3f5595",
  color: "#ffffff",
};
/**
 * A styled span component with a shadow.
 * @param {string} color - The emoji color. Defaults to: "#3abdffs".
 */
export const FooterEmoji = styled.span`
  color: ${(props) => props.color};
  filter: drop-shadow(0px 0px 12px ${(props) => props.color});
`;

FooterEmoji.defaultProps = {
  color: "#3abdff",
};
