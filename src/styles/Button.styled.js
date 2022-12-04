import styled from "styled-components";

export const ButtonComponent = styled.button`
  background: ${(props) => props.background};
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
    ${(props) => props.background} 13.66%,
    ${(props) => props.lightenBackground} 88.71%
  );

  &:hover {
    text-shadow: 0px 2px 9px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 20px -1px ${(props) => props.background};
  }
  &:focus-visible {
    outline: 3px solid ${(props) => props.background};
    box-shadow: 0px 0px 20px 2px ${(props) => props.lightenBackground};
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
