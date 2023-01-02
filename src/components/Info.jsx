import styled from "styled-components";

const InfoComponent = styled.div`
  padding: 12px 0 15% 0;
  color: white;
  text-align: center;

  & b {
  }
`;

const Emoji = styled.span`
  font-size: 20px;
`;

export const Info = (props) => {
  return props.visible ? (
    <InfoComponent>
      {props.emoji ? <Emoji>{props.emoji}</Emoji> : null} {props.children}
    </InfoComponent>
  ) : null;
};

Info.defaultProps = {
  visible: true,
};
