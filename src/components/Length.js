import "../styles/style.css";

const Length = (props) => {
  const input = props.input;
  return (
    <div
      style={input.length <= 0 ? { visibility: "hidden" } : {}}
      className="TextLength"
    >
      Length: {input.length}
    </div>
  );
};

export default Length;
