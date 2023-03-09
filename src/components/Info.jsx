import styled from "styled-components";

/**
 * A component that displays information with an optional emoji and visibility control.
 * @param {boolean} visible - Whether or not the message is visible.
 * @param {string} emoji - The emoji to display before the message.
 * @param {React.ReactNode} children - The message to display.
 * @returns {JSX.Element | null} The rendered message component or null if not visible.
 * @example <Info visible={true} emoji="😊">This is info</Info>
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
  /* padding: 12px 0 10vh 0; */
  color: white;
  text-align: center;

  & b {
  }
`;

const Emoji = styled.span`
  font-size: 20px;
`;
