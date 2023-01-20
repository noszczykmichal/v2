import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import useCSSTransition from "../../../../utils/useCSSTransition";
import "./NavigationItem.scss";

function NavigationItem({ url, index, children }) {
  const [nodeRef, isVisible] = useCSSTransition();

  return (
    <CSSTransition
      in={isVisible}
      timeout={2000}
      classNames={{
        enter: "navigation-item--enter",
        enterActive: "navigation-item--enter-active",
        exit: "",
        exitActive: "",
      }}
      mountOnEnter
      nodeRef={nodeRef}
    >
      <li
        className="navigation-item"
        ref={nodeRef}
        style={{ animationDelay: `${index * 200}ms` }}
      >
        <Link to={url}>{children}</Link>
      </li>
    </CSSTransition>
  );
}

NavigationItem.propTypes = {
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavigationItem;
