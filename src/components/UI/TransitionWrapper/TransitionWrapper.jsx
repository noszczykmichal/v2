import PropTypes from "prop-types";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { loaderDelay } from "../../../utils/config";
import "./TransitionWrapper.scss";

function TransitionWrapper({ animStart, classes, delayFactor, children }) {
  const nodeRef = useRef();

  return (
    <CSSTransition
      in={animStart}
      timeout={loaderDelay}
      classNames={classes}
      nodeRef={nodeRef}
    >
      <div
        style={{ transitionDelay: `${delayFactor + 1}00ms` }}
        ref={nodeRef}
        className="transition-wrapper"
      >
        {children}
      </div>
    </CSSTransition>
  );
}

TransitionWrapper.propTypes = {
  animStart: PropTypes.bool.isRequired,
  classes: PropTypes.string.isRequired,
  delayFactor: PropTypes.number,
  children: PropTypes.node.isRequired,
};

TransitionWrapper.defaultProps = {
  delayFactor: -1,
};

export default TransitionWrapper;
