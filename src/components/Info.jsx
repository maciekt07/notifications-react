import styled from "styled-components";

const InfoComponent = styled.div`
  margin-top: 12px;
  color: white;
  text-align: center;

  & b {
  }
`;

const Emoji = styled.span`
  font-size: 20px;
`;

const Info = (props) => {
  return props.visible ? (
    <InfoComponent>
      <Emoji>{props.emoji}</Emoji> {props.children}
    </InfoComponent>
  ) : null;
};

Info.defaultProps = {
  visible: true,
  emoji: null,
};

export default Info;
