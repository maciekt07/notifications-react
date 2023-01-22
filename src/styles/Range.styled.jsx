import styled from "styled-components";

export const RangeComponent = styled.input.attrs({
  type: "range",
})`
  -webkit-appearance: none;
  height: 7px;
  background: grey;
  border-radius: 5px;
  background-image: linear-gradient(#03a688, #03a688);
  background-repeat: no-repeat;
  transition: 0.3s all;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #03a688;
    cursor: pointer;
    box-shadow: 0 0 2px 0 #555;
    transition: background 0.3s ease-in-out;
  }
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
  &::-webkit-slider-thumb:hover {
    box-shadow: #03a68850 0px 0px 0px 8px;
  }
  &::-webkit-slider-thumb:active {
    box-shadow: #03a68850 0px 0px 0px 11px;
    transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      left 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      bottom 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
`;
