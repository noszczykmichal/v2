import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import "./Button.scss";
import { navLinks } from "../../../utils/config";

function Button({ children }) {
  const navLinksLength = navLinks.length;
  const [isVisible, setVisibility] = useState(false);
  const nodeRef = useRef();
  setTimeout(() => setVisibility(true), 0);
  return (
    <CSSTransition
      in={isVisible}
      timeout={2000}
      classNames={{
        enter: "resume-button--enter",
        enterActive: "resume-button--enter-active",
      }}
      nodeRef={nodeRef}
    >
      <a
        href="/"
        className="resume-button"
        style={{ animationDelay: `${navLinksLength * 200}ms` }}
        ref={nodeRef}
      >
        {children}
      </a>
    </CSSTransition>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
