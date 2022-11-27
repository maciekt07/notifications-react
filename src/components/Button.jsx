import styled from "styled-components";

const ButtonComponent = styled.button`
  background: ${(props) => props.color};
  transition: 0.3s all;
  border-radius: 22px;
  color: white;
  border: none;
  padding: 0.6em 1.2em;
  min-width: 150px;
  width: auto;
  font-size: 1.5em;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: 0.3s all;
  background: linear-gradient(
    261.62deg,
    ${(props) => props.color} 13.66%,
    darken(60, ${(props) => props.color}) 88.71%
  );
  &:hover {
    text-shadow: 0px 2px 9px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 20px -1px ${(props) => props.color};
  }
  &:focus-visible {
    outline: 3px solid white;
    box-shadow: 0px 0px 20px 2px ${(props) => props.color};
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      text-shadow: none;
      box-shadow: none;
    }
  }
`;

const Button = (props) => {
  return props.visible ? (
    <ButtonComponent
      type="button"
      visible={props.visible}
      disabled={props.disabled}
      onClick={props.onClick}
      color={props.color}
    >
      {props.children}
    </ButtonComponent>
  ) : null;
};

Button.defaultProps = {
  visible: true,
  disabled: false,
};

export default Button;
