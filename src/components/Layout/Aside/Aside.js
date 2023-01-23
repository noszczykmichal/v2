// import { Link } from "react-router-dom";

// import IconGithub from "./Icons/IconGithub";
// import Linkedin from "./Icons/Linkedin";
import PropTypes from "prop-types";
import "./Aside.scss";

function Aside({ children }) {
  return <aside className="social">{children}</aside>;
}

Aside.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Aside;
