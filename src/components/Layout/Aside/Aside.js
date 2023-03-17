import { useState, useEffect, useRef } from "react";
import { TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";

import usePrefersReducedMotion from "../../../utils/hooks/usePrefersReducedMotion";
import { loaderDelay } from "../../../utils/config";
import TransitionWrapper from "../../UI/TransitionWrapper/TransitionWrapper";
import "./Aside.scss";

function Aside({ orientation, children }) {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotionRef = useRef(prefersReducedMotion);
  const attachedClasses = ["social", orientation];

  useEffect(() => {
    if (prefersReducedMotionRef.current) {
      return undefined;
    }

    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <aside className={attachedClasses.join(" ")}>
      {prefersReducedMotion ? (
        children
      ) : (
        <TransitionGroup component={null}>
          {isMounted && (
            <TransitionWrapper animStart={isMounted} classes="fade">
              {children}
            </TransitionWrapper>
          )}
        </TransitionGroup>
      )}
    </aside>
  );
}

Aside.propTypes = {
  orientation: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Aside;
