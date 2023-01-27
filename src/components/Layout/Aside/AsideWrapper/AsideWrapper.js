import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

function AsideWrapper({ animStart, delay, children }) {
  const nodeRef = useRef();

  return (
    <CSSTransition
      in={animStart}
      timeout={delay}
      classNames="fade"
      nodeRef={nodeRef}
    >
      {children}
    </CSSTransition>
  );
}

AsideWrapper.propTypes = {
  animStart: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default AsideWrapper;
