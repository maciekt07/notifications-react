const AccessDenied = () => {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  return (
    <div style={{ userSelect: "none" }}>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          color: "white",
          userSelect: "none",
        }}
      >
        <h1>
          Brak dostępu
          <br />
          :(((((
        </h1>
      </div>
      <br />
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            borderRadius: "18px",
            border: "5px solid white",
          }}
          src="https://media1.giphy.com/media/OPU6wzx8JrHna/giphy.gif?cid=ecf05e47la0jbjeanrctnn8egz8jij7t3go01q0ca4pu11hz&rid=giphy.gif&ct=g"
          alt=""
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "1vh",
          left: "1vh",
          color: "white",
          opacity: ".6",
          fontSize: "10px",
        }}
      >
        <h2>{localStorage.getItem("pass").slice(0, 35)}</h2>
      </div>
    </div>
  );
};

export default AccessDenied;
