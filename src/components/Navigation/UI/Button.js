import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import { navLinks } from "../../../utils/config";
import useCSSTransition from "../../../utils/useCSSTransition";
import "./Button.scss";

function Button({ children }) {
  const [nodeRef, isVisible] = useCSSTransition();
  const navLinksLength = navLinks.length;

  return (
    <CSSTransition
      in={isVisible}
      timeout={4000}
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
