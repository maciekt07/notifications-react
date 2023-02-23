import styled from "styled-components";
/**
A component that displays information with an optional emoji and visibility control.
@param {object} props - The props object.
@param {boolean} props.visible - Whether the component should be visible or hidden.
@param {string} props.emoji - The emoji to display next to the information.
@param {React.ReactNode} props.children - The content to display inside the component.
@returns {JSX.Element|null} The rendered component or null if visible is false.
*/
export const Info = ({ visible, emoji, children }) => {
  return visible ? (
    <InfoComponent>
      {emoji && <Emoji>{emoji}</Emoji>} {children}
    </InfoComponent>
  ) : null;
};

Info.defaultProps = {
  visible: true,
};
const InfoComponent = styled.div`
  padding: 12px 0 10vh 0;
  color: white;
  text-align: center;

  & b {
  }
`;

const Emoji = styled.span`
  font-size: 20px;
`;
