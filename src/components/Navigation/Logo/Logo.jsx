import { useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import usePrefersReducedMotion from "@/utils/hooks/usePrefersReducedMotion";
import LogoSVG from "@/components/Navigation/Logo/LogoSVG/LogoSVG";
import "@/components/Navigation/Logo/Logo.scss";

export default function Logo() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotionRef = useRef(prefersReducedMotion);
  const [isMounted, setIsMounted] = useState(false);
  const nodeRef = useRef();

  useEffect(() => {
    if (prefersReducedMotionRef.current) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return prefersReducedMotion ? (
    <LogoSVG />
  ) : (
    <TransitionGroup component={null}>
      {isMounted && (
        <CSSTransition
          in={isMounted}
          timeout={300}
          classNames="fade"
          nodeRef={nodeRef}
        >
          <LogoSVG ref={nodeRef} />
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}
