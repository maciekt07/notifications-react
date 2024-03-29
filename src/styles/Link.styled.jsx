import styled from "styled-components";
/**
 * A styled link component with hover and focus states and transition effects.
 * @param {string} clr - The color of the link. Defaults to #3abdff.
 * @example <LinkComponent color="#672fff" href="https://example.com/">This is link</LinkComponent>
 */
export const LinkComponent = styled.a`
  cursor: pointer;
  color: ${(props) => props.clr};
  display: inline-block;
  position: relative;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s all;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.clr};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    border-radius: 100px;
  }

  &:hover::after,
  &:focus-visible::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:hover {
    text-shadow: 0px 0px 20px ${(props) => props.clr};
  }

  &:focus,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
`;
LinkComponent.defaultProps = {
  clr: "#3abdff",
};
