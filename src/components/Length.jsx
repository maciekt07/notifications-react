import styled from "styled-components";

/**
 * Renders a component displaying the length of input.
 * @param {boolean} focus - Whether the input is currently focused.
 * @param {number} length - The length of the input value.
 * @returns {JSX.Element} The JSX element that displays the length of the input.
 * @example <Length focus={Focus}  length={Text.length} />
 */

export const Length = ({ focus, length }) => {
  const numberFormatter = Intl.NumberFormat(navigator.language);
  const format = (n) => numberFormatter.format(n);
  return (
    <LengthComponent f={focus} length={length}>
      Length: <LengthNumber red={length >= 997}>{format(length)}</LengthNumber>
    </LengthComponent>
  );
};

const LengthComponent = styled.div`
  pointer-events: none;
  border-radius: 10px;
  margin-top: -62px;
  color: white;
  background: rgba(102, 119, 217, 0.7);
  backdrop-filter: blur(7px);
  box-shadow: ${(props) =>
    props.length >= 997
      ? "0px 0px 20px 2px #ff8383"
      : "0px 0px 20px 2px rgba(102, 119, 217, 0.7)"};
  text-shadow: 0px 2px 9px rgba(0, 0, 0, 0.25);
  padding: 8px;
  transition: 0.3s all;
  transform: scale(${(props) => (props.length <= 0 || props.f ? 0 : 1)});
  opacity: ${(props) => (props.length <= 0 || props.f ? 0 : 1)};
  border: ${(props) =>
    props.length >= 997 ? "2px solid #ff8383" : "2px solid transparent"};
  /* transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.35) !important; */
`;

const LengthNumber = styled.span`
  transition: 0.3s color;
  text-shadow: ${(props) => props.red && "0px 0px 6px #ff5d5d"};
`;
