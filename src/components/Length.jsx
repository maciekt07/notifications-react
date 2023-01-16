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
  transform: scale(${(props) => (props.length <= 0.2 || props.f ? 0 : 1)});
  opacity: ${(props) => (props.length <= 0 || props.f ? 0 : 1)};
  /* transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.35) !important; */
`;

export const Length = (props) => {
  const numberFormatter = Intl.NumberFormat(navigator.language);
  const format = (n) => numberFormatter.format(n);
  return (
    <LengthComponent f={props.focus} length={props.length}>
      Length: {format(props.length)}
    </LengthComponent>
  );
};
