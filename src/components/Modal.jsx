import React from "react";
import styled, { css } from "styled-components";
import { IoClose } from "react-icons/io5";

const Layout = css`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  transition: 0s all !important;
  z-index: 2;
`;
const ModalComponent = styled.div`
  font-family: poppins;
  ${Layout}
`;
const ModalOverlay = styled.div`
  ${Layout}
  background: rgba(41, 41, 41, 0.462);
  backdrop-filter: blur(4px);
`;
const ModalContent = styled.div`
  z-index: 3;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #ffffffa2;
  backdrop-filter: blur(20px);
  padding: 20px 30px;
  max-width: 600px;
  min-width: 300px;
  border-radius: 16px;
  & h2 {
    opacity: 0.8;
  }
  & h3 {
    opacity: 0.75;
  }
`;
const Close = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 7px;
  & svg {
    height: 1.4em;
    width: 1.4em;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: #ff4646;
      filter: drop-shadow(0px 0px 12px rgb(255, 0, 0));
    }
    &:active {
      color: #ff4646cb;
      filter: drop-shadow(0px 0px 16px rgb(255, 0, 0));
    }
  }
`;

export const Modal = (props) => {
  if (props.show) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      {props.show && (
        <ModalComponent>
          <ModalOverlay onClick={props.close} />
          <ModalContent>
            <h2>{props.content.title}</h2>
            <div>{props.content.text}</div>
            <Close onClick={props.close}>
              <IoClose />
            </Close>
            {props.children}
          </ModalContent>
        </ModalComponent>
      )}
    </>
  );
};
