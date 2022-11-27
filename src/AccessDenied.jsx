import styled from "styled-components";
document.addEventListener("contextmenu", (event) => event.preventDefault());
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

const AccessDenied = () => {
  return (
    <Container>
      <Center>
        <h1>
          Brak dostępu
          <br />
          :(((((
        </h1>
      </Center>
      <br />
      <Center>
        <img
          src="https://media1.giphy.com/media/OPU6wzx8JrHna/giphy.gif?cid=ecf05e47la0jbjeanrctnn8egz8jij7t3go01q0ca4pu11hz&rid=giphy.gif&ct=g"
          alt=""
        />
      </Center>
      <Password>
        <h2>{localStorage.getItem("v").slice(0, 35)}</h2>
      </Password>
    </Container>
  );
};

export default AccessDenied;
