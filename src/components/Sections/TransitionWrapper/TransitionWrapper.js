import PropTypes from "prop-types";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import "./TransitionWrapper.scss";
import { loaderDelay } from "../../../utils/config";

function TransitionWrapper({ animStart, classes, delayFactor, children }) {
  const nodeRef = useRef();

  return (
    <CSSTransition
      in={animStart}
      timeout={loaderDelay}
      classNames={classes}
      nodeRef={nodeRef}
    >
      <div style={{ transitionDelay: `${delayFactor + 1}00ms` }} ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
}

TransitionWrapper.propTypes = {
  animStart: PropTypes.bool.isRequired,
  classes: PropTypes.string.isRequired,
  delayFactor: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

export default TransitionWrapper;
