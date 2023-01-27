import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.scss";
import { navLinks, loaderDelay } from "../../../utils/config";
import usePrefersReducedMotion from "../../../utils/usePrefersReducedMotion";

function NavigationItems() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotionRef = useRef(prefersReducedMotion);
  const buttonRef = useRef();

  useEffect(() => {
    if (prefersReducedMotionRef.current) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <nav className="desktop-navigation">
      {prefersReducedMotion ? (
        <>
          <ol className="navigation-items">
            {navLinks.map((navLink) => (
              <li className="navigation-item" key={navLink.name}>
                <Link to={navLink.url}>{navLink.name}</Link>
              </li>
            ))}
          </ol>
          <button type="button" className="resume-button">
            Resume
          </button>
        </>
      ) : (
        <>
          <ol className="navigation-items">
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks.map((navLink, ind) => (
                  <NavigationItem
                    classes="fadedown"
                    animStart={isMounted}
                    url={navLink.url}
                    key={navLink.name}
                    delayFactor={ind}
                  >
                    {navLink.name}
                  </NavigationItem>
                ))}
            </TransitionGroup>
          </ol>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition
                timeout={loaderDelay}
                classNames="fadedown"
                nodeRef={buttonRef}
              >
                <button
                  type="button"
                  className="resume-button"
                  style={{ transitionDelay: `${navLinks.length * 100}ms` }}
                  ref={buttonRef}
                >
                  Resume
                </button>
              </CSSTransition>
            )}
          </TransitionGroup>
        </>
      )}
    </nav>
  );
}

export default NavigationItems;
