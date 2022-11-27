import styled from "styled-components";
const LengthComponent = styled.div`
  pointer-events: none;
  border-radius: 10px;
  margin-top: -62px;
  color: white;
  background: rgba(102, 119, 217, 0.7);
  backdrop-filter: blur(7px);
  box-shadow: 0px 0px 20px 2px rgba(102, 119, 217, 0.7);
  text-shadow: 0px 2px 9px rgba(0, 0, 0, 0.25);
  padding: 8px;
  opacity: ${(props) => (props.length <= 0 ? 0 : 1)};
`;

const Length = (props) => {
  return (
    <LengthComponent length={props.length}>
      Length: {props.length}
    </LengthComponent>
  );
};

export default Length;
