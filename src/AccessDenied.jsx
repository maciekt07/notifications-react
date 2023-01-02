import styled from "styled-components";
import { toast, Toaster } from "react-hot-toast";
import { GlobalStyle, btn } from "./styles";
import { useEffect, useState } from "react";

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  justify-content: center;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: white;
`;

const FunnyBtn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  user-select: none !important;
  &:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px;
  }
`;

const JokeContainer = styled.div`
  transition: 0.3s all;
  background: ${(props) => (props.joke === "" ? "transparent" : "#8e6ef7")};
  border-radius: 25px;
  padding: 20px;
  margin-top: 3em;
  user-select: all !important;
  -webkit-user-select: all !important;
  -ms-user-select: all !important;
`;

const Image = styled.img`
  border-radius: 25px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  max-width: 400px;
  height: 200px;

  &:hover {
    transform: scale(1.1);
  }
`;

const AccessDenied = () => {
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  useEffect(() => {
    setTimeout(() => {
      toast.error(
        `Złe hasło debilu${localStorage.getItem("v") !== "" ? ":" : ""} ${localStorage
          .getItem("v")
          .slice(0, 16)}${localStorage.getItem("v").length > 16 ? "..." : ""}`,
        {
          duration: 3000,
          position: "bottom-center",
          style: {
            padding: "16px",
            border: `2px solid ${btn.clear}`,
            borderRadius: "16px",
            color: "black",
          },
        }
      );
    }, 1000);
  }, []);
  const randomD = () => {
    let d = "d";
    for (let j = 0; j < Math.floor(Math.random() * 25); j++) {
      const r = Math.floor(Math.random() * 2);
      d += r === 0 ? "d" : "D";
    }
    return d;
  };
  const [joke, setJoke] = useState("");
  const [gif, setGif] = useState(
    "https://media1.giphy.com/media/OPU6wzx8JrHna/giphy.gif?cid=ecf05e47la0jbjeanrctnn8egz8jij7t3go01q0ca4pu11hz&rid=giphy.gif&ct=g"
  );
  const [btnText, setBtnText] = useState("Zdobądź dostęp za darmo 😐");
  const fetchJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    const data = response.json();
    return data;
  };
  const handleClick = async () => {
    setJoke("Ładowanko...");
    toast.promise(
      fetchJoke(),
      {
        loading: "Ładowanko...",
        success: `x${randomD()}`,
        error: (err) => err.toString(),
      },

      {
        position: "bottom-center",
        style: {
          padding: "16px",
          border: `2px solid #823aff`,
          borderRadius: "16px",
          color: "black",
        },
        success: {
          duration: 1500,
          icon: "😂",
        },
      }
    );
    setBtnText("następny śmieszny żart 🤣");
    setGif("https://media.tenor.com/a0WoZ6DIH84AAAAC/off-work-funny.gif");
    const { joke } = await fetchJoke();
    setJoke(joke);
  };

  return (
    <Container>
      <GlobalStyle />
      <Toaster />
      <h1>
        Brak dostępu
        <br />
        :(((((
      </h1>
      <Image draggable="false" src={gif} alt="gif" />
      <JokeContainer joke={joke}>
        <FunnyBtn onClick={handleClick}>{btnText}</FunnyBtn>
        <br />
        <div>{joke}</div>
      </JokeContainer>
    </Container>
  );
};

export default AccessDenied;
