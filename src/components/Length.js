import "../styles/style.css";

const Length = (props) => {
  const input = props.input;
  return (
    <div
      style={
        input.length <= 0
          ? { transition: ".3s", opacity: 0 }
          : { transition: ".3s", opacity: 1 }
      }
      className="TextLength"
    >
      Length: {input.length}
    </div>
  );
};

export default Length;
