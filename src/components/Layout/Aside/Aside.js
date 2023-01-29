/* eslint-disable react/jsx-no-useless-fragment */
import { useState, useEffect, useRef } from "react";
import { TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";

import usePrefersReducedMotion from "../../../utils/usePrefersReducedMotion";
import { loaderDelay } from "../../../utils/config";
import TransitionWrapper from "../../UI/TransitionWrapper/TransitionWrapper";
import "./Aside.scss";

function Aside({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotionRef = useRef(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotionRef.current) {
      return undefined;
    }

    const timeout = setTimeout(() => setIsMounted(true), loaderDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <aside className="social">
      {prefersReducedMotion ? (
        <>{children}</>
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
  children: PropTypes.node.isRequired,
};

export default Aside;
