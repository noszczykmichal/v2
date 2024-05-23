import { useState, useEffect, useRef, useContext } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import NavigationItem from "./NavigationItem/NavigationItem";
import {
  navLinks,
  loaderDelay,
  linkAnalyticsHandler,
} from "../../../utils/config";
import usePrefersReducedMotion from "../../../utils/hooks/usePrefersReducedMotion";
import UIContext from "../../../store/uiContext";
import "./NavigationItems.scss";

function NavigationItems() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const prefersReducedMotionRef = useRef(prefersReducedMotion);
  const buttonRef = useRef();
  const { closeSideNavHandler } = useContext(UIContext);

  const onLinkClick = () => {
    document.body.classList.remove("blur");
    closeSideNavHandler();
  };

  const resumeEventHandler = () => {
    const analytics = getAnalytics();
    logEvent(analytics, "resume_download");
  };

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
    <div className="navigation">
      {prefersReducedMotion ? (
        <>
          <ol className="navigation-items">
            {navLinks.map((navLink) => (
              <li className="navigation-item" key={navLink.name}>
                <a href={navLink.url} onClick={onLinkClick}>
                  {navLink.name}
                </a>
              </li>
            ))}
          </ol>
          <Link
            to="./cv_michal_noszczyk.pdf"
            target="_blank"
            className="resume-button"
            onClick={linkAnalyticsHandler("navigation", "resume_button")}
            download
          >
            Resume
          </Link>
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
                <Link
                  to="./cv_michal_noszczyk.pdf"
                  target="_blank"
                  className="resume-button"
                  style={{ transitionDelay: `${navLinks.length * 100}ms` }}
                  ref={buttonRef}
                  onClick={linkAnalyticsHandler("navigation", "resume_button")}
                  download
                >
                  Resume
                </Link>
              </CSSTransition>
            )}
          </TransitionGroup>
        </>
      )}
    </div>
  );
}

export default NavigationItems;
