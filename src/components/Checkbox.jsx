import { CheckBoxClick, CheckboxComponent, CheckboxText } from "../styles";

export const Checkbox = (props) => {
  return (
    <>
      <CheckBoxClick onClick={props.click}>
        <CheckboxComponent checked={props.check} onChange={props.click} />
        &nbsp;
        <CheckboxText checked={props.check}>{props.children}</CheckboxText>
      </CheckBoxClick>
    </>
  );
};
