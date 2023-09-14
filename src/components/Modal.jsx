import React from "react";
import styled, { css } from "styled-components";
import { IoClose } from "react-icons/io5";

/**
 * Renders a modal dialog box.
 * @param {boolean} show - Whether or not to show the modal dialog box.
 * @param {() => void} close - A function to close the modal dialog box.
 * @param {string} title - The title of the modal dialog box.
 * @param {React.ReactNode} children - The content of the modal dialog box.
 * @returns {JSX.Element | null} The rendered modal dialog box or null if not shown.
 * @example
 *  <Modal show={showModal} title="This is title" close={() => setModal(false)}>
    <h1>This is content</h1>
  </Modal>;
 */

export const Modal = ({ show, close, title, children }) => {
  return (
    <>
      {show && (
        <ModalComponent>
          <ModalOverlay onClick={close} />
          <ModalContent>
            <h2>{title}</h2>
            <Close onClick={close}>
              <IoClose />
            </Close>
            {children}
          </ModalContent>
        </ModalComponent>
      )}
    </>
  );
};
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
  text-transform: capitalize;
  z-index: 3;
  position: absolute;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #ffffffa2;
  backdrop-filter: blur(16px);
  padding: 25px 35px;
  max-width: 600px;
  min-width: 300px;
  border-radius: 26px;
  & h2 {
    opacity: 0.8;
  }
  & h3 {
    opacity: 0.75;
  }
`;
const Close = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
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
