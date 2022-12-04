import { ButtonComponent } from "../styles/Button.styled";

const Button = (props) => {
  return props.visible ? (
    <ButtonComponent
      type="button"
      visible={props.visible}
      disabled={props.disabled}
      onClick={props.onClick}
      background={props.background}
      lightenBackground={props.lightenBackground}
    >
      {props.children}
    </ButtonComponent>
  ) : null;
};

Button.defaultProps = {
  visible: true,
  disabled: false,
  background: "#b6a0e4",
};

export default Button;
