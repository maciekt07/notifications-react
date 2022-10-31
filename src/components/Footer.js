import "../styles/style.css";
const Footer = (props) => {
  const show = props.show;
  return (
    <div
      style={
        show
          ? { transition: ".5s", opacity: 1 }
          : { transition: ".5s", opacity: 0 }
      }
      className="footer"
    >
      Made with 💙 By&nbsp;
      <a target="_blank" rel="noreferrer" href="https://github.com/maciekt07">
        maciekt07
      </a>
    </div>
  );
};

export default Footer;
