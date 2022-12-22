import styled from "styled-components";
import { toast, Toaster } from "react-hot-toast";
import GlobalStyle from "./styles/Global.styled";
import { useEffect } from "react";
import { btn } from "./styles/Variables.styled";
const Container = styled.div`
  user-select: none;
  color: white;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Password = styled.div`
  position: absolute;
  bottom: 1vh;
  left: 1vh;
  opacity: 0.6;
  font-size: 10px;
`;

const Image = styled.img`
  border-radius: 25px;
`;

const AccessDenied = () => {
  useEffect(() => {
    toast.error("złe hasło zjebie", {
      duration: 2000,
      position: "bottom-center",
      style: {
        padding: "16px",
        border: `2px solid ${btn.clear}`,
        borderRadius: "16px",
        color: "black",
      },
    });
  }, []);

  document.addEventListener("contextmenu", (event) => event.preventDefault());

  return (
    <Container>
      <GlobalStyle />
      <Toaster />
      <Center>
        <h1>
          Brak dostępu
          <br />
          :(((((
        </h1>
      </Center>
      <br />
      <Center>
        <Image
          draggable="false"
          src="https://media1.giphy.com/media/OPU6wzx8JrHna/giphy.gif?cid=ecf05e47la0jbjeanrctnn8egz8jij7t3go01q0ca4pu11hz&rid=giphy.gif&ct=g"
          alt=""
        />
      </Center>
      <Password>
        <h1>{localStorage.getItem("v").slice(0, 35)}</h1>
      </Password>
    </Container>
  );
};

export default AccessDenied;
