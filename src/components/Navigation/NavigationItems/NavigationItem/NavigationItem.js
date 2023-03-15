import { useRef, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import "./NavigationItem.scss";
import { loaderDelay } from "../../../../utils/config";
import UIContext from "../../../../store/uiContext";

function NavigationItem({ animStart, classes, url, delayFactor, children }) {
  const nodeRef = useRef();
  const { linkClickHandler } = useContext(UIContext);

  const onLinkClick = () => {
    document.body.classList.toggle("blur");
    linkClickHandler();
  };

  return (
    <CSSTransition
      in={animStart}
      timeout={loaderDelay}
      classNames={classes}
      nodeRef={nodeRef}
    >
      <li
        className="navigation-item"
        ref={nodeRef}
        style={{ transitionDelay: `${delayFactor * 100}ms` }}
      >
        <a href={url} onClick={onLinkClick}>
          {children}
        </a>
      </li>
    </CSSTransition>
  );
}

NavigationItem.propTypes = {
  animStart: PropTypes.bool.isRequired,
  classes: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  delayFactor: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
};

export default NavigationItem;
