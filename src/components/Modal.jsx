import React from "react";
import styled, { css } from "styled-components";
import { IoClose } from "react-icons/io5";

export function Modal(props) {
  if (props.show) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const Layout = css`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    transition: 0s all !important;
  `;
  const Modal = styled.div`
    ${Layout}
  `;
  const ModalOverlay = styled.div`
    ${Layout}
    background: rgba(58, 58, 58, 0.613);
    backdrop-filter: blur(4px);
  `;
  const ModalContent = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    max-width: 600px;
    min-width: 300px;
    border-radius: 16px;

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
      transition: 0.1s !important;
      &:hover {
        color: #ff4646;
      }
    }
  `;
  return (
    <>
      {props.show && (
        <Modal>
          <ModalOverlay onClick={props.close} />
          <ModalContent>
            <h2>{props.content.title}</h2>
            <p>{props.content.text}</p>
            <Close onClick={props.close}>
              <IoClose />
            </Close>
            {props.children}
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
